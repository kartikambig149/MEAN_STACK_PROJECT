/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for NgIf, NgFor etc.
import { RouterLink } from '@angular/router'; // <--- THIS WAS THE MISSING IMPORT

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink // <--- ADDED HERE
  ],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h2>
      <div *ngIf="cartItems.length === 0" class="text-center text-gray-600">
        Your cart is empty. <a routerLink="/products" class="text-blue-600 hover:underline">Start shopping!</a>
      </div>
      <div *ngIf="cartItems.length > 0" class="bg-white p-6 rounded-lg shadow-md">
        <ul>
          <li *ngFor="let item of cartItems" class="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
            <div>
              <p class="font-semibold text-lg">{{ item.name }}</p>
              <p class="text-gray-600">Quantity: {{ item.quantity }}</p>
            </div>
            <span class="font-bold text-xl">${{ item.price * item.quantity | number:'1.2-2' }}</span>
          </li>
        </ul>
        <div class="text-right mt-6">
          <p class="text-2xl font-bold">Total: ${{ getTotal() | number:'1.2-2' }}</p>
          <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md mt-4 transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './cart-view.component.scss'
})
export class CartViewComponent {
  // This is a sample cart. In a real application, you'd fetch this from a CartService.
  cartItems = [
    { id: '1', name: 'Luxury Smartwatch', price: 299.99, quantity: 2 },
    { id: '2', name: 'Wireless Ergonomic Mouse', price: 45.50, quantity: 1 },
    { id: '3', name: 'Noise-Cancelling Headphones', price: 199.00, quantity: 1 }
  ];

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
}*/