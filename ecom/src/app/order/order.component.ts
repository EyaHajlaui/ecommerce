import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
  
})
export class OrderComponent {
  selectedCategory: string = 'Rings';

  // Full product list
  products = [
    { name: 'Diamond Ring', price: 249.99, image: 'assets/images/ring1.jpg', category: 'Rings' },
    { name: 'Golden Necklace', price: 199.99, image: 'assets/images/necklace1.jpg', category: 'Necklaces' },
    { name: 'Pearl Bracelet', price: 149.99, image: 'assets/images/bracelet1.jpg', category: 'Bracelets' },
    { name: 'Silver Earrings', price: 89.99, image: 'assets/images/earrings1.jpg', category: 'Earrings' }
  ];

  // Filtered products based on selected category
  get filteredProducts() {
    return this.products.filter(product => product.category === this.selectedCategory);
  }

  // Update category when user clicks sidebar item
  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
