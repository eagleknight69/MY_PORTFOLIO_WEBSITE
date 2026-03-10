import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { resumeData } from '../../data/resume';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-system-design',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  template: `
    <section class="py-24 px-6 md:px-12 lg:px-24 bg-black/40">
      <div class="max-w-6xl mx-auto">
        <div appScrollReveal class="mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">System Design & Architecture</h2>
          <div class="h-1 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            *ngFor="let design of resumeData.systemDesign; let i = index"
            appScrollReveal [delay]="i * 100"
            class="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all group"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 rounded-xl bg-emerald-500/5 text-emerald-500">
                <lucide-icon name="layers" class="w-6 h-6"></lucide-icon>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{{ design.title }}</h3>
            </div>
            <p class="text-white/50 text-sm leading-relaxed mb-6">
              {{ design.description }}
            </p>
            
            <!-- Simplified Flow Diagram Mockup -->
            <div class="flex items-center gap-2 font-mono text-[10px] text-white/30 uppercase tracking-widest">
              <span>Client</span>
              <lucide-icon name="chevron-down" class="w-3 h-3 -rotate-90"></lucide-icon>
              <span class="text-emerald-500/50">API Gateway</span>
              <lucide-icon name="chevron-down" class="w-3 h-3 -rotate-90"></lucide-icon>
              <span>Service</span>
              <lucide-icon name="chevron-down" class="w-3 h-3 -rotate-90"></lucide-icon>
              <span class="text-blue-500/50">DB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SystemDesignComponent {
  resumeData = resumeData;
}
