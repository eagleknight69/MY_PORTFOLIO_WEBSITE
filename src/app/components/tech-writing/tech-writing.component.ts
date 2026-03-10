import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { resumeData } from '../../data/resume';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-tech-writing',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  template: `
    <section class="py-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-4xl mx-auto">
        <div appScrollReveal class="mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Technical Writing</h2>
          <div class="h-1 w-20 bg-emerald-500 rounded-full"></div>
          <p class="mt-6 text-white/50 leading-relaxed">
            Sharing engineering knowledge and deep dives into backend systems and AI integration.
          </p>
        </div>

        <div class="space-y-4">
          <a
            *ngFor="let article of resumeData.writing; let i = index"
            [href]="article.url"
            appScrollReveal [delay]="i * 100"
            class="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all"
          >
            <div class="flex items-center gap-6">
              <div class="p-3 rounded-xl bg-white/5 text-white/30 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-all">
                <lucide-icon name="book-open" class="w-5 h-5"></lucide-icon>
              </div>
              <h3 class="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{{ article.title }}</h3>
            </div>
            <lucide-icon name="external-link" class="w-4 h-4 text-white/20 group-hover:text-emerald-500 transition-colors"></lucide-icon>
          </a>
        </div>
      </div>
    </section>
  `
})
export class TechWritingComponent {
  resumeData = resumeData;
}
