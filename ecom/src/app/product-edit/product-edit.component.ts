import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {ReactiveFormsModule,FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-edit',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit{
  productForm!: FormGroup;
  productId!: string;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
  this.productId = this.route.snapshot.paramMap.get('id')!;
  this.productService.getProductById(this.productId).subscribe({
    next: (product) => {
      this.productForm = this.fb.group({
        name: [product.name],
        description: [product.description],
        price: [product.price],
        category: [product.category],
        image: ['']
      });
    },
    error: (err) => {
      console.error('Failed to load product:', err);
    }
  });
}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.productForm.value.name);
    formData.append('description', this.productForm.value.description);
    formData.append('price', this.productForm.value.price);
    formData.append('category', this.productForm.value.category);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.productService.updateProduct(this.productId, formData).subscribe(() => {
      alert('Product updated!');
      this.router.navigate(['/products']); // navigate back to list
    });
  }
}
