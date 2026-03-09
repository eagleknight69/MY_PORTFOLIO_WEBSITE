import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div
      class="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50 transition-transform duration-100 ease-out"
      [style.transform]="'scaleX(' + scrollProgress + ')'"
    ></div>
    
    <nav class="fixed top-0 w-full z-40 transition-all duration-300"
         [class.bg-black_50]="scrolled"
         [class.backdrop-blur-md]="scrolled"
         [class.border-b]="scrolled"
         [class.border-white_10]="scrolled"
         [class.py-4]="scrolled"
         [class.bg-transparent]="!scrolled"
         [class.py-6]="!scrolled"
         [style.backgroundColor]="scrolled ? 'rgba(0,0,0,0.5)' : 'transparent'">
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" class="text-xl font-bold text-white tracking-tighter">
          DY<span class="text-emerald-500">.</span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a *ngFor="let link of links" [href]="link.href"
             class="text-sm font-medium text-white/70 hover:text-white transition-colors">
            {{ link.name }}
          </a>
          <a href="mailto:devaditya.yadav14@gmail.com"
             class="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors">
            Contact
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button class="md:hidden text-white" (click)="isOpen = !isOpen">
          <lucide-icon *ngIf="!isOpen" name="menu"></lucide-icon>
          <lucide-icon *ngIf="isOpen" name="x"></lucide-icon>
        </button>
      </div>
    </nav>

    <!-- Mobile Nav -->
    <div
      class="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden transition-opacity duration-300"
      [class.opacity-100]="isOpen"
      [class.opacity-0]="!isOpen"
      [style.pointerEvents]="isOpen ? 'auto' : 'none'"
    >
      <a *ngFor="let link of links" [href]="link.href" (click)="isOpen = false"
         class="text-3xl font-bold text-white/70 hover:text-white transition-colors">
        {{ link.name }}
      </a>
      <a href="mailto:devaditya.yadav14@gmail.com" (click)="isOpen = false"
         class="mt-4 px-8 py-4 bg-white text-black text-lg font-medium rounded-full">
        Contact Me
      </a>
    </div>
  `
})
export class NavigationComponent {
  readonly Menu = Menu;
  readonly X = X;
  isOpen = false;
  scrolled = false;
  scrollProgress = 0;

  links = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = winScroll / height;
  }
}
