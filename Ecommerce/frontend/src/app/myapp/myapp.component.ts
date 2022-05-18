import { MyOrderComponent } from './my-order/my-order.component';
import { MyshoppingcartComponent } from './myshoppingcart/myshoppingcart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent implements OnInit {

  orderFinished = false;

  @ViewChild('productListC')
  productListC : ProductListComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC : MyshoppingcartComponent;

  @ViewChild('orderC')
  orderC : MyOrderComponent;

  constructor() { }

  ngOnInit(): void {
  }

  finishOrder(orderFinished: boolean) {
    console.log("MyApp: orderfinished called!")
    this.orderFinished = orderFinished;
  }
}
