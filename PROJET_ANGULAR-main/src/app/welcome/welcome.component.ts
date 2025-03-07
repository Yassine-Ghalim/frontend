import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/register']); // Rediriger vers la composante d'inscription
  }

  goToLogin() {
    this.router.navigate(['/login']); // Rediriger vers la composante de connexion
  }


    scrollTo(sectionId: string): void {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
}