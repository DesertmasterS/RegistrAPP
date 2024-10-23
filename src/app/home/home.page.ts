import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  welcomeMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.setWelcomeMessage();
  }  
  
  setWelcomeMessage() {
    const username = this.authService.getCurrentUser();
    this.welcomeMessage = `Bienvenido, ${username}`; 
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }
  
}



