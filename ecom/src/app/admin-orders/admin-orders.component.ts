import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        console.error('Error loading orders:', err);
      }
    });
  }

  confirmOrder(orderId: string): void {
    this.orderService.confirmOrder(orderId).subscribe({
      next: () => {
        alert('Order confirmed successfully');
        this.loadOrders(); // Refresh list
      },
      error: (err) => {
        console.error('Error confirming order:', err);
      }
    });
  }
}
