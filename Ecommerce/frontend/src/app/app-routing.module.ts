import { MyappComponent } from './myapp/myapp.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderlistComponent } from './orderlist/orderlist.component';

const routes: Routes = [
  { path: 'index', component: EcommerceComponent },
  { path: 'myapp', component: MyappComponent },
  {path: 'orders', component: OrderlistComponent },
  {path: 'orders/detail/:id', component: EcommerceComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
