import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private currentUser: string = '';
  private registeredUsers: string[] = ['usuario'];

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'seba' && password === '1234') {
      this.isAuthenticated = true;
      this.currentUser = username;
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUser = '';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): string {
    return this.currentUser;
  }

  resetPassword(username: string): boolean {
    if (this.registeredUsers.includes(username)) {
      console.log(`Se envió una solicitud para restablecer la contraseña del usuario: ${username}`);
      return true; 
    }
    return false;
  }
}

