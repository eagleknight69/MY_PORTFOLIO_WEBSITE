import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
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
