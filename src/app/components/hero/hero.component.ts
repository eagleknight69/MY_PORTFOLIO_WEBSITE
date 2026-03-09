import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Download, ChevronDown } from 'lucide-angular';
import { resumeData } from '../../data/resume';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  template: `
    <section class="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20">
      <div class="max-w-5xl mx-auto w-full">
        <div appScrollReveal [delay]="200">
          <h2 class="text-emerald-400 font-mono text-sm md:text-base mb-4 tracking-wider uppercase">
            System Online // Welcome
          </h2>
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-6 leading-[1.1]">
            {{ resumeData.basics.name }}.<br />
            <span class="text-white/40">{{ resumeData.basics.title }}</span>
          </h1>
        </div>

        <div class="max-w-2xl" appScrollReveal [delay]="400">
          <p class="text-lg md:text-xl text-white/60 leading-relaxed mb-10">
            {{ resumeData.basics.summary }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4" appScrollReveal [delay]="600">
          <a
            href="#experience"
            class="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
          >
            View Experience
          </a>
          <button
            (click)="printResume()"
            class="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          >
            <lucide-icon name="download" class="w-4 h-4 mr-2"></lucide-icon>
            Download Resume
          </button>
        </div>
      </div>

      <div
        appScrollReveal [delay]="1200" [duration]="1000"
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/30"
      >
        <span class="text-xs font-mono uppercase tracking-widest mb-2">Scroll</span>
        <div class="animate-bounce">
          <lucide-icon name="chevron-down" class="w-5 h-5"></lucide-icon>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  resumeData = resumeData;

  printResume() {
    window.print();
  }
}
