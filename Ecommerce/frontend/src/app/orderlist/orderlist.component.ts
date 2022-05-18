import { Component, OnInit } from '@angular/core';
import { Order } from '../ecommerce/model/order.model';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  title: String = "Order List";
  orders: Order[] = [];

  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.loaddAllOrders();
  }

  loaddAllOrders(): void {
    this.service.getAllOrders().subscribe((data: any) =>  {
      this.orders = data;
      console.log(JSON.stringify(this.orders))
    });
  }

}
