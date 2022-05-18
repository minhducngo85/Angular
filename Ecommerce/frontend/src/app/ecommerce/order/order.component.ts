import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductOrders } from '../model/product-orders.model';
import { EcommerceService } from '../service/ecommerce.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: ProductOrders;
  total: number;
  paid: boolean;
  sub: Subscription;

  constructor(private ecommerceService: EcommerceService) {
    this.orders = this.ecommerceService.ProductOrders;
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.orders = this.ecommerceService.ProductOrders;
    });
    this.loadTotal();
  }

  pay() {
    this.paid = true;
    this.ecommerceService.saveOrder(this.orders).subscribe();
  }

  loadTotal() {
    this.sub = this.ecommerceService.TotalChanged.subscribe(() => {
      this.total = this.ecommerceService.Total;
    });
  }
}
