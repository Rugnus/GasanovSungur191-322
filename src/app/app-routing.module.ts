import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent 
  },
  // {
  //   path: 'shop',
  //   component: ShopComponent
  // }
  {
    path: 'shop',
    loadChildren: () => 
    import('./shop/shop.module').then(m => m.ShopModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
