import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Code2 } from 'lucide-angular';
import { resumeData } from '../../data/resume';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  resumeData = resumeData;
}
