import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white transition-all duration-700 ease-in-out"
      [class.opacity-0]="fadingOut"
      [class.scale-105]="fadingOut"
      [style.filter]="fadingOut ? 'blur(10px)' : 'none'"
    >
      <div
        class="mb-8 transition-all duration-500 ease-out"
        [class.scale-80]="!showLogo"
        [class.opacity-0]="!showLogo"
        [class.scale-100]="showLogo"
        [class.opacity-100]="showLogo"
      >
        <div class="w-24 h-24 border-2 border-white/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <span class="text-4xl font-bold tracking-tighter font-mono">DY</span>
        </div>
      </div>
      
      <div class="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div 
          class="h-full bg-white transition-all duration-75 ease-linear"
          [style.width.%]="progress"
        ></div>
      </div>
      <div class="mt-4 text-xs font-mono text-white/50 uppercase tracking-widest">
        Initializing System
      </div>
    </div>
  `
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
