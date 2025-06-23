import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../core/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2 class="text-3xl font-bold mb-6 text-center">Our Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div *ngFor="let product of products" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img [src]="product.imageUrl" alt="{{ product.name }}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold text-gray-800">{{ product.name }}</h3>
          <p class="text-gray-600 mt-2 line-clamp-2">{{ product.description }}</p>
          <div class="flex justify-between items-center mt-4">
            <span class="text-2xl font-bold text-blue-600">\${{ product.price | number:'1.2-2' }}</span>
            <a [routerLink]="['/products', product._id]" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">View Details</a>
          </div>
        </div>
      </div>
    </div>
    <p *ngIf="!products || products.length === 0" class="text-center text-gray-600 mt-8">No products found.</p>
  `,
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}