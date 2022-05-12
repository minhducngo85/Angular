import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductOrder } from '../model/product-order.model';
import { Product } from '../model/product.model';
import { EcommerceService } from '../service/ecommerce.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  sub: Subscription;

  constructor(private ecommerceService: EcommerceService) {
  }

  ngOnInit(): void {
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
  }

  loadProducts() {
    this.ecommerceService.getAllProducts().subscribe((products : any) => {
      this.products = products;
      this.products.forEach(product => {
        this.productOrders.push(new ProductOrder(product, 0));
      })
    });
  }

  loadOrders() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {

    });
  }


}
