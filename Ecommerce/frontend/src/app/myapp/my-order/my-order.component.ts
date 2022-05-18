import { OrderService } from './../../service/order.service';
import { MyappService } from './../../service/myapp.service';
import { ProductOrder } from './../../ecommerce/model/product-order.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  paid: boolean = false;

  orderProducts: ProductOrder[] = [];
  total: number;
  // subscription of order changes
  sub: Subscription;

  constructor(private appService: MyappService, private orderService: OrderService) {
    this.orderProducts = appService.OrderProducts;
  }

  ngOnInit(): void {
    this.sub = this.appService.OrderChanged.subscribe(() => {
      this.orderProducts = this.appService.OrderProducts;
      this.total = this.appService.total;
      console.log(JSON.stringify(this.orderProducts));
      console.log(this.total);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  pay() {
    this.orderService.saveOrder(this.orderProducts).subscribe((data: any) => {
      this.paid = true;
    });
  }
}
