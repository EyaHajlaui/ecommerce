import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  userId = '66b8a8f4c7d1f9b02d8f0e43'; // 🔹 For now, hardcode or get from login

  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  orderOne(item: any) {
    const orderData = {
      userId: this.userId,
      items: [{ productId: item._id, quantity: item.quantity }],
      totalAmount: item.price * item.quantity
    };

    this.http.post('http://localhost:5000/api/orders/createorder', orderData)
      .subscribe({
        next: (res) => {
          console.log('Single item order placed:', res);
          alert('Order placed successfully!');
        },
        error: (err) => {
          console.error('Error placing single order:', err);
          alert('Failed to place order.');
        }
      });
  }

  orderAll() {
    const orderData = {
      userId: this.userId,
      items: this.cartItems.map(item => ({
        productId: item._id,
        quantity: item.quantity
      })),
      totalAmount: this.getTotalPrice()
    };

    this.http.post('http://localhost:5000/api/orders/createorder', orderData)
      .subscribe({
        next: (res) => {
          console.log('All items order placed:', res);
          alert('All items ordered successfully!');
          this.cartService.clearCart();
        },
        error: (err) => {
          console.error('Error placing all items order:', err);
          alert('Failed to place order.');
        }
      });
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }
}
