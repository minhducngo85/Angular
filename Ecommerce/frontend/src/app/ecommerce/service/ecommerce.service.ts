import { Product } from './../model/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
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
  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  private total: number;

  constructor(private http: HttpClient) { }

  getAllProducts()  {
    return this.http.get(this.productsUrl, this.httpOptions);
  }

  saveOrder(order: ProductOrders) {
    return this.http.post(this.ordersUrl, order);
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
