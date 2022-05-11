import { ExpenseEntityComponent } from './expense-entity/expense-entity.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpenseGuard } from './expense.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'expenses', component: ExpenseEntryListComponent, canActivate: [ExpenseGuard]},
  { path: 'expenses/detail/:id', component: ExpenseEntityComponent, canActivate: [ExpenseGuard] },
  { path: '', redirectTo: 'expenses', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
