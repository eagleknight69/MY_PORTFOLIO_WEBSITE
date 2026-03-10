import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit {
  @Output() complete = new EventEmitter<void>();
  progress = 0;
  showLogo = false;
  fadingOut = false;

  ngOnInit() {
    setTimeout(() => this.showLogo = true, 100);

    const duration = 1500;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      this.progress = (currentStep / steps) * 100;
      if (currentStep >= steps) {
        clearInterval(timer);
        this.fadingOut = true;
        setTimeout(() => this.complete.emit(), 600);
      }
    }, interval);
  }
}
