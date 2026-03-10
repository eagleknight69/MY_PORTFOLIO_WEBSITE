import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { resumeData } from '../../data/resume';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-github-proof',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  template: `
    <section class="py-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-6xl mx-auto">
        <div appScrollReveal class="mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">GitHub Activity</h2>
          <div class="h-1 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let stat of resumeData.github.stats; let i = index"
            appScrollReveal [delay]="i * 100"
            class="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all"
          >
            <div class="text-4xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{{ stat.value }}</div>
            <div class="text-white/40 font-mono text-xs uppercase tracking-widest">{{ stat.label }}</div>
          </div>
        </div>

        <!-- GitHub Stats Card Mockup/Embed -->
        <div appScrollReveal [delay]="400" class="mt-12 p-1 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-white/5 to-transparent">
          <div class="bg-[#0a0a0a] rounded-[22px] p-8 md:p-12 border border-white/5">
            <div class="flex flex-col md:flex-row items-center justify-between gap-8">
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <lucide-icon name="github" class="w-6 h-6 text-emerald-500"></lucide-icon>
                  Open Source Contributions
                </h3>
                <p class="text-white/50 leading-relaxed mb-6">
                  Active development in FastAPI, AI systems, and full-stack architecture. 
                  Focusing on building secure, scalable, and AI-integrated applications.
                </p>
                <div class="flex flex-wrap gap-4">
                  <div class="flex items-center gap-2 text-sm text-white/70">
                    <div class="w-3 h-3 rounded-full bg-blue-500"></div> Python
                  </div>
                  <div class="flex items-center gap-2 text-sm text-white/70">
                    <div class="w-3 h-3 rounded-full bg-yellow-400"></div> TypeScript
                  </div>
                  <div class="flex items-center gap-2 text-sm text-white/70">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div> Angular
                  </div>
                </div>
              </div>
              <div class="w-full md:w-auto">
                <a href="https://github.com/Devaditya-Yadav" target="_blank" class="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-emerald-500 hover:text-white transition-all">
                  Follow on GitHub
                  <lucide-icon name="external-link" class="w-4 h-4"></lucide-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class GithubProofComponent {
  resumeData = resumeData;
}
