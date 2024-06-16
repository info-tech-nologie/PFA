import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isRightPanelActive: boolean = false;

  constructor(private authService: AuthService,
    private router: Router) {}

  toggleSignIn() {
    console.log('Sign In button clicked');
    // Implement your sign in logic here
    this.authService.login(this.email, this.password)
      .subscribe(
        (success) => {
          console.log('Login successful');
          this.router.navigate(['/dashboard']); // Redirect to dashboard component
        },
        (error) => {
          console.error('Login error:', error);
          this.errorMessage = 'Invalid email or password'; // Display error message
        }
      );
  }

  toggleSignUp() {
    console.log('Sign Up button clicked');
    // Implement your sign up logic here
  }

  togglePanel() {
    this.isRightPanelActive = !this.isRightPanelActive;
  }
}
