import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'detail/:id', component: ProductItemDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'success/:id', component: SuccessComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
