import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Product} from '../../shared/models/product.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {


  products: Product[] = [];
  id: number;
  product: Product;
  status: boolean;
  sortProduct;
  productForm: FormGroup;


  constructor(private productService: ProductService, private router: Router, private activatedRouter: ActivatedRoute) {
    // this.products.sort((a, b) => {
    //   if (a.name < b.name) {return -1;}
    //   else if (a.name > b.name) {return 1;}
    //   else return 0;
    // });
  }

  ngOnInit(): void {
    this.getData();
    
  }

  async getData() {
    try {
        this.products = await this.productService.getAll();
        this.products.sort((a, b) => {
          if (a.name < b.name && (a.status == false) && (b.status == false)) {return 1;}
          else if (a.name > b.name && (a.status == false) && (b.status == false)) {return -1;}
          else if (a.name > b.name && (a.status == true) && (b.status == true)) {return 1}
          else if (a.name < b.name && (a.status == true) && (b.status == true)) {return -1}
          else return 0;
        });
    } catch (error) {
      console.log(error);
    }
  }


   async onBuyProduct(id: number, productName, productCount) {
    console.log(id);
    this.status = true;
    this.productForm = new FormGroup({
      name: new FormControl(productName, [Validators.required]),
      count: new FormControl(productCount, [Validators.required]),
      status: new FormControl(true, [Validators.required]),
    })
    await this.productService.putOne(id, {name: productName, count: productCount, status: this.status});
    this.getData();
  }

  onAddProfile() {
    this.router.navigate([this.router.url, 'edit'])
  }

  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'edit', id])
  }

  async editStatus(id: number, product: Product) {
    try {
      await this.productService.putOne(id, product)
    } catch (error) {
      console.log(error);
    }
  }

}
