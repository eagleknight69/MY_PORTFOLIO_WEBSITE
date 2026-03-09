import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Code2 } from 'lucide-angular';
import { resumeData } from '../../data/resume';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  template: `
    <section id="projects" class="py-24 px-6 md:px-12 lg:px-24 bg-black/20">
      <div class="max-w-6xl mx-auto">
        <div appScrollReveal class="mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Projects</h2>
          <div class="h-1 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            *ngFor="let project of resumeData.projects; let i = index"
            appScrollReveal [delay]="i * 100"
            class="flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
          >
            <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <lucide-icon name="code-2" class="w-24 h-24"></lucide-icon>
            </div>
            
            <div class="relative z-10 flex-grow">
              <div class="text-xs font-mono text-emerald-400 mb-4 uppercase tracking-wider">
                {{ project.type }} • {{ project.dates }}
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 leading-tight">
                {{ project.title }}
              </h3>
              
              <div class="flex flex-wrap gap-2 mb-8">
                <span *ngFor="let tech of project.stack" class="px-3 py-1 text-xs font-mono text-white/70 bg-white/5 rounded-full border border-white/10">
                  {{ tech }}
                </span>
              </div>

              <ul class="space-y-3 mb-8">
                <li *ngFor="let bullet of project.bullets" class="flex items-start gap-3 text-sm text-white/60">
                  <span class="mt-1.5 w-1 h-1 rounded-full bg-white/30 shrink-0"></span>
                  <span class="leading-relaxed">{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  resumeData = resumeData;
}
