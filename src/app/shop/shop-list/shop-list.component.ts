import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import {Product} from '../../shared/models/product.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {


  products: Product[] = [];


  constructor(private productService: ProductService, private router: Router, private activatedRouter: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      // this.getAge(this.user.date);
      this.products = await this.productService.getAll();
      // this.users = isNullOrUndefined(await users) ? [] : await users;
    } catch (error) {
      console.log(error);
    }
  }

  onAddProfile() {
    this.router.navigate([this.router.url, 'profile'])
  }

  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'edit', id])
  }

}
