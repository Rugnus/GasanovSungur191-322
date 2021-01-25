import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopEditComponent } from './shop-edit/shop-edit.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: '',
        component: ShopListComponent
      },
      {
        path: 'edit',
        component: ShopEditComponent
      },
      {
        path: 'edit/:id',
        component: ShopEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
