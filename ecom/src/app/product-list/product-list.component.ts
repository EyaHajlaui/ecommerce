import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}
  

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.error('Error loading products', err);
      }
    });
  }
  onEdit(id: string) {
    this.router.navigate(['/products/edit', id]);
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.products = this.products.filter(p => p._id !== id);
          alert('Product deleted!');
        },
        error: (err) => {
          alert('Delete failed');
          console.error(err);
        }
      });
    }
  }
}
