import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'; // adjust path
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-order',
  standalone: true,               // assumed
  imports: [CommonModule], 
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  selectedCategory: string = 'Rings';
  products: any[] = []; // fetched from backend

  constructor(private productService: ProductService, private cartService: CartService ) {}
  
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Fetched products:', this.products);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  get filteredProducts() {
    return this.products.filter(product => product.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  }
}
