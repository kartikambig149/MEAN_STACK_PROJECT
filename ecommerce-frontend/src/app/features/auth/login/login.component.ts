import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For ngModel
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
        <form (ngSubmit)="onSubmit()">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="user.email"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              [(ngModel)]="user.password"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Login
          </button>
        </form>
        <p *ngIf="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</p>
      </div>
    </div>
  `
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.login(this.user).subscribe({
      next: (res) => {
        console.log('Login successful', res);
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Login failed', err);
        this.errorMessage = err.error.msg || 'Login failed. Please try again.';
      }
    });
  }
}