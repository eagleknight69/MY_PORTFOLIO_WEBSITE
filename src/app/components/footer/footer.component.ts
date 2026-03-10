import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, Phone, Linkedin, Github } from 'lucide-angular';
import { resumeData } from '../../data/resume';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  resumeData = resumeData;
  currentYear = new Date().getFullYear();
}
