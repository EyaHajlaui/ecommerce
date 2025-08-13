import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:5000/api/orders'; // Adjust if needed

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  confirmOrder(orderId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/confirm/${orderId}`, {});
  }
}
