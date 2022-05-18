import { Product } from './../model/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductOrder } from '../model/product-order.model';
import { ProductOrders } from '../model/product-orders.model';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** uirl is hard coded in proxy-conf.json */
  private productsUrl = "/api/products";
  private ordersUrl = "/api/orders";

  private productOrder: ProductOrder;
  private orders: ProductOrders = new ProductOrders();

  /**
   * A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
   */
  // to notify the changes in the shopping cart
  private productOrderSubject = new Subject();
  ProductOrderChanged = this.productOrderSubject.asObservable();

  // to notify the change sin the order like remove item from shooping cart
  private ordersSubject = new Subject();
  OrdersChanged = this.ordersSubject.asObservable();

  private totalSubject = new Subject();
  TotalChanged = this.totalSubject.asObservable();

  private total: number;

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.productsUrl, this.httpOptions);
  }

  saveOrder(order: ProductOrders) {
    console.log(JSON.stringify(order));
    return this.http.post(this.ordersUrl, order, this.httpOptions);
  }

  set SelectedProductOrder(value: ProductOrder) {
    this.productOrder = value;
    this.productOrderSubject.next(0);
  }

  get SelectedProductOrder() {
    return this.productOrder;
  }

  set ProductOrders(value: ProductOrders) {
    this.orders = value;
    this.ordersSubject.next(0);
  }

  get ProductOrders() {
    return this.orders;
  }

  get Total() {
    return this.total;
  }

  set Total(value: number) {
    this.total = value;
    this.totalSubject.next(0);
  }
}
