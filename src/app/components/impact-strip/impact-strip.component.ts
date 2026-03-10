import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Trophy, Zap, Award } from 'lucide-angular';
import { resumeData } from '../../data/resume';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-impact-strip',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  templateUrl: './impact-strip.component.html',
  styleUrl: './impact-strip.component.scss'
})
export class ImpactStripComponent {
  resumeData = resumeData;
  icons = ['zap', 'trophy', 'award'];

  getIconName(index: number): string {
    return this.icons[index % this.icons.length];
  }
}
