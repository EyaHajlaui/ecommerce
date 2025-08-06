import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getallproducts`);
  }

  getProductById(id: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/getproductbyid/${id}`);
}


  createProduct(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/createproduct`, formData);
  }

  updateProduct(id: string, productData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateproduct/${id}`, productData);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteproduct/${id}`);
  }
}
