import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';


@NgModule({
  declarations: [ShopComponent, ShopEditComponent, ShopListComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShopModule { }
