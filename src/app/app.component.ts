import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedBackgroundComponent } from './components/animated-background/animated-background.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { ImpactStripComponent } from './components/impact-strip/impact-strip.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedBackgroundComponent,
    SplashScreenComponent,
    NavigationComponent,
    HeroComponent,
    ImpactStripComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  loading = true;

  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }

  onSplashComplete() {
    this.loading = false;
    document.body.style.overflow = 'unset';
  }
}
