import { ProductOrder } from '../../ecommerce/model/product-order.model';
import { Subscription } from 'rxjs';
import { ProductOrders } from '../../ecommerce/model/product-orders.model';
import { MyappService } from '../../service/myapp.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-myshoppingcart',
  templateUrl: './myshoppingcart.component.html',
  styleUrls: ['./myshoppingcart.component.css']
})
export class MyshoppingcartComponent implements OnInit {
  /** The list of products in shopping car */
  orderProducts: ProductOrder[];

  /** The subscription */
  sub: Subscription;

  /** Total price of the order */
  total: number;

  /** EventEmitter is an angular2 abstraction and its only purpose is to emit events in components.  */
  @Output() onOrderFinished: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private appService: MyappService) { 
    this.onOrderFinished = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
    this.orderProducts = [];
    this.loadOrderProducts();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadOrderProducts() {
    this.sub = this.appService.ProductOrderChanged.subscribe(() => {
      console.log("added product to order")
      let anOrderProduct = this.appService.SelectedOrderProduct;
      if (anOrderProduct) {
        // product not exsiting
        let index = this.orderProducts.findIndex(value => value.product === anOrderProduct.product);
        if (index < 0) {
          this.orderProducts.push(new ProductOrder(anOrderProduct.product, anOrderProduct.quantity, anOrderProduct.product.price * anOrderProduct.quantity));
        } else { // addition
          let orderProduct = this.orderProducts[index];
          console.log(JSON.stringify(orderProduct));
          orderProduct.quantity += anOrderProduct.quantity;
          orderProduct.totalPrice = orderProduct.quantity * orderProduct.product.price;
        }
      }
      this.total = this.calculateTotal(this.orderProducts);
    })
  }

  private calculateTotal(products: ProductOrder[]): number {
    let sum = 0;
    products.forEach(value => {
      sum += (value.product.price * value.quantity);
    });
    return sum;
  }


  removeFromCart(orderProduct: ProductOrder) {
    console.log("remove order product");
    let index = this.orderProducts.findIndex(value => value === orderProduct);
    console.log("index: " + index);
    if (index > -1) {
      this.orderProducts.splice(index, 1);
      console.log(JSON.stringify(this.orderProducts));
    }

  }


  public trackOrderProduct(index: number, item: ProductOrder) {
    let identifier = item.product.id + "_" + item.quantity;
    return identifier;
  }

  finishOrder() {
    console.log("Shopping cart:  finishing the current order total = " + this.total);
    this.onOrderFinished.emit(true);
    // this must be above the stter of OrderProduct
    // in order to notify listener of all changes
    this.appService.total = this.total;
    // notify changes
    this.appService.OrderProducts = this.orderProducts;
  }

}
