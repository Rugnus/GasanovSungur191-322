import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {

  producst: Product[] = [];
  id: number;
  product: Product;
  productForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      if (!isNullOrUndefined(params.id)) {
        this.id = params.id;
      } else {
        this.id = null;
      }
    })
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      count: new FormControl(null, [Validators.required]),
      status: new FormControl(false, [Validators.required]),
    })
    this.getData();
  }

  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let product = this.productService.getOneById(this.id);
        this.product = await product;
      } catch (error) {
        console.log(error); 
      }
      this.productForm.patchValue({
        name: this.product.name,
        count: this.product.count,
        status: this.product.status,
      })
    }
  }

  async onDelete() {
    try {
      await this.productService.deleteOneByid(this.id);
    } catch (error) {
      console.log(error);
    }
    this.router.navigate(['/shop']);
  }

  async onSave() {
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.productService.putOne(this.id, this.productForm.value);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        let res = await this.productService.postOne(this.productForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } catch (error) {
        console.log(error);
      }
    }
  }

}
