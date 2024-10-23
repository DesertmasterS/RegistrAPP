import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  resetPassword() {
    if (this.authService.resetPassword(this.username)) {
      this.successMessage = `Se ha enviado un enlace para restablecer tu contraseña a su correo electrónico asociado con el usuario ${this.username}.`;
      this.errorMessage = '';
      setTimeout(() => {
        this.router.navigate(['/login']); 
      }, 3000);
      
    } else {
      this.successMessage = '';
      this.errorMessage = 'Por favor, ingresa un nombre de usuario válido.';
    }
  }
}




