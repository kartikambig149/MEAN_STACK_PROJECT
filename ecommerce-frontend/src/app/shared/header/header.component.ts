import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common'; // Needed for NgIf, NgFor etc.
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule], // Import CommonModule for directives
  template: `
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <nav class="container mx-auto flex justify-between items-center">
        <a routerLink="/" class="text-2xl font-bold">E-Shop</a>
        <ul class="flex space-x-4">
          <li><a routerLink="/products" routerLinkActive="font-bold" class="hover:text-blue-200">Products</a></li>
          <li *ngIf="!authService.isLoggedIn()"><a routerLink="/login" routerLinkActive="font-bold" class="hover:text-blue-200">Login</a></li>
          <li *ngIf="!authService.isLoggedIn()"><a routerLink="/register" routerLinkActive="font-bold" class="hover:text-blue-200">Register</a></li>
          <li *ngIf="authService.isLoggedIn()"><a routerLink="/cart" routerLinkActive="font-bold" class="hover:text-blue-200">Cart</a></li>
          <li *ngIf="authService.isLoggedIn()"><button (click)="logout()" class="hover:text-blue-200">Logout</button></li>
        </ul>
      </nav>
    </header>
  `,
  styleUrl: './header.component.scss' // Optional: for component-specific styles
})
export class HeaderComponent {
    constructor(public authService: AuthService) {} // Make authService public to use in template

    logout() {
        this.authService.logout();
    }
}