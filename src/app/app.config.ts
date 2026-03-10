import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { LucideAngularModule, Menu, X, Download, ChevronDown, Trophy, Zap, Award, MapPin, Calendar, Code2, Mail, Phone, Linkedin, Github, Cpu, Layers, Briefcase, ExternalLink, GitBranch, Terminal, BookOpen, MessageSquare, Send } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(LucideAngularModule.pick({ 
      Menu, X, Download, ChevronDown, Trophy, Zap, Award, MapPin, Calendar, Code2, Mail, Phone, Linkedin, Github, Cpu, Layers, Briefcase, ExternalLink, GitBranch, Terminal, BookOpen, MessageSquare, Send 
    }))
  ]
};
