import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { OrderComponent } from './ecommerce/order/order.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { MyappComponent } from './myapp/myapp.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { ProductListComponent } from './myapp/product-list/product-list.component';
import { MyshoppingcartComponent } from './myapp/myshoppingcart/myshoppingcart.component';
import { MyOrderComponent } from './myapp/my-order/my-order.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProductsComponent,
    OrderComponent,
    ShoppingCartComponent,
    MyappComponent,
    OrderlistComponent,
    ProductListComponent,
    MyshoppingcartComponent,
    MyOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
