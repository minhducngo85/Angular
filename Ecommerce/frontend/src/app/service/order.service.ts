import { ProductOrders } from './../ecommerce/model/product-orders.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductOrder } from '../ecommerce/model/product-order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl: string = "/api/orders";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private restClient: HttpClient) { }

  getAllOrders() {
    return this.restClient.get(this.orderUrl, this.httpOptions);
  }

  saveOrder(order: ProductOrder[]) {
    let obj = {"productOrders" : order};
    console.log(JSON.stringify(obj));
    return this.restClient.post(this.orderUrl, JSON.stringify(obj), this.httpOptions);
  }
}
