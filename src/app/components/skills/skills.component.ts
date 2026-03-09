import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resumeData } from '../../data/resume';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="skills" class="py-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-4xl mx-auto">
        <div appScrollReveal class="mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Skills & Education</h2>
          <div class="h-1 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 class="text-xl font-semibold text-white mb-8">Technical Arsenal</h3>
            <div class="flex flex-wrap gap-3">
              <div
                *ngFor="let skill of resumeData.skills[0].items; let i = index"
                appScrollReveal [delay]="i * 50"
                class="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-default"
              >
                {{ skill }}
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-white mb-8">Education</h3>
            <div class="space-y-8">
              <div
                *ngFor="let edu of resumeData.education"
                appScrollReveal
                class="relative pl-6 border-l border-white/10"
              >
                <div class="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <h4 class="text-lg font-medium text-white mb-1">{{ edu.degree }}</h4>
                <div class="text-white/60 mb-2">{{ edu.institution }}</div>
                <div class="text-sm font-mono text-emerald-400/80">
                  {{ edu.location }} • {{ edu.dates }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  resumeData = resumeData;
}
