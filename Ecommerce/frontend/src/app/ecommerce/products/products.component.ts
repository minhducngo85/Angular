import { ProductOrders } from './../model/product-orders.model';
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
  selectedProductOrder: ProductOrder;
  productSelected: boolean = false;

  private shoppingCartOrders: ProductOrders;

  sub: Subscription;

  constructor(private ecommerceService: EcommerceService) {
  }

  ngOnInit(): void {
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
  }

  loadProducts() {
    this.ecommerceService.getAllProducts().subscribe((products: any) => {
      this.products = products;
      this.products.forEach(product => {
        this.productOrders.push(new ProductOrder(product, 0));
      })
    });
  }

  getProductIndex(product: Product): number {
    return this.ecommerceService.ProductOrders.productOrders.findIndex(
      value => value.product === product);
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

  loadOrders() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    });
  }

  addToCart(productOrder: ProductOrder) {
    console.log("addTocart: " + JSON.stringify(productOrder))
    this.ecommerceService.SelectedProductOrder = productOrder;
    this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
    this.productSelected = true;
  }

  removeFromCart(productOrder: ProductOrder) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(this.getProductIndex(productOrder.product), 1);
    }
    this.ecommerceService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    this.productSelected = false;
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.ecommerceService.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
  }
}
