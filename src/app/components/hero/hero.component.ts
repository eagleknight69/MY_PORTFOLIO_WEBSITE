import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Download, ChevronDown } from 'lucide-angular';
import { resumeData } from '../../data/resume';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  resumeData = resumeData;

  printResume() {
    window.print();
  }
}
