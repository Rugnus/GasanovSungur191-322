import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import {Product} from '../shared/models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
