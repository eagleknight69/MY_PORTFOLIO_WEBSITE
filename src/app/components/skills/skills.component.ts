import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resumeData } from '../../data/resume';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  resumeData = resumeData;
}
