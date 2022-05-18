import { MyappService } from './../../service/myapp.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/ecommerce/model/product.model';
import { ProductOrder } from 'src/app/ecommerce/model/product-order.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  /** The list of products */
  products: Product[] = [];

  /** The products of the current order */
  orderProducts: ProductOrder[] = [];

  constructor(private productService: ProductService, private appService : MyappService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data: any) => {
        this.products = data;
        console.log(JSON.stringify(this.products));
        this.products.forEach(aProduct => {
          this.orderProducts.push(new ProductOrder(aProduct, 0, 0));
        });
    })
  }

  addToCart(productOrder : ProductOrder) {
    console.log("Add to cart :" + JSON.stringify(productOrder));
    this.appService.SelectedOrderProduct = productOrder;
    productOrder.quantity = 0;
  }
}
