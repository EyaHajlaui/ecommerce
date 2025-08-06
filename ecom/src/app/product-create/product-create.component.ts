import { Component } from '@angular/core';
import { ProductService } from '../services/product.service'; // make sure this exists
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [ CommonModule,FormsModule ],
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  selectedImage: File | null = null;

  constructor(private productService: ProductService) {}

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onSubmit(formValues: any) {
    const formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('description', formValues.description);
    formData.append('price', formValues.price);
    formData.append('category', formValues.category);
    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    this.productService.createProduct(formData).subscribe({
      next: (res) => {
        alert('✅ Product added successfully!');
        console.log(res);
      },
      error: (err) => {
        alert('❌ Error adding product');
        console.error(err);
      }
    });
  }

}
