import { ProductOrders } from '../ecommerce/model/product-orders.model';
import { ProductOrder } from '../ecommerce/model/product-order.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyappService {
  
  /** the current selected product */
  currentOrderProduct : ProductOrder;
   /**
   * A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
   */
  /** To notify Shooping cart view */
  private productOrderSubject = new Subject();
  ProductOrderChanged = this.productOrderSubject.asObservable();
  

  /** The current order and its subscription */
  total : number = 0;
  private orderProducts : ProductOrder[] = [];
  private orderSubject = new Subject();
  OrderChanged = this.orderSubject.asObservable();

  constructor() { }

  /**
   * setter
   */
  set SelectedOrderProduct(value: ProductOrder) {
    console.log("set selected order product");
    this.currentOrderProduct = value;
    // to notify a item is selected
    this.productOrderSubject.next(0);
  }

  /**
   * getter
   */
  get SelectedOrderProduct() {
    return this.currentOrderProduct;
  }

  set OrderProducts(orderProducts : ProductOrder[]) {
    this.orderProducts = orderProducts;
    this.orderSubject.next(0);
  }

  get OrderProducts(){
    return this.orderProducts;
  }
}
