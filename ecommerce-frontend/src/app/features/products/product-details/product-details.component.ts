import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../core/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div *ngIf="product" class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img [src]="product.imageUrl" alt="{{ product.name }}" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ product.name }}</h2>
          <p class="text-gray-700 text-lg mb-4">{{ product.description }}</p>
          <div class="flex items-baseline mb-4">
            <span class="text-5xl font-extrabold text-blue-600">{{ product.price | number:'1.2-2' }}</span>
            <span class="ml-3 text-gray-500">In Stock: {{ product.stock }}</span>
          </div>
          <div class="mb-4 text-gray-600">
            <span class="font-semibold">Category:</span> {{ product.category?.name }}
          </div>
          <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <div *ngIf="!product" class="text-center text-gray-600 mt-8">Product not found.</div>
  `,
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => {
          console.error('Error fetching product details:', err);
          this.product = null; // Indicate product not found or error
        }
      });
    }
  }
}