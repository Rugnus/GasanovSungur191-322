import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttp } from './basehttp';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttp{

  constructor(public http: HttpClient) { 
    super(http, 'products');
  }
}
