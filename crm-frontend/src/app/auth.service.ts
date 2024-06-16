import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  constructor() { }

  login(email: string, password: string): Observable<boolean> {
    // Here you would typically call an API to authenticate
    // For demonstration, let's assume a hardcoded check
    if (email === 'mohamedali@example.com' && password === 'mohamedali@example.com') {
      // Simulate successful authentication
      localStorage.setItem('currentUser', JSON.stringify({ email: email }));
      return of(true); // Return observable of true for success
    } else {
      return of(false); // Return observable of false for failure
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
       // Check if user is logged in (e.g., check local storage or token)
       return !!localStorage.getItem('currentUser');
      }

  getCurrentUser(): any {
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
  }


}
