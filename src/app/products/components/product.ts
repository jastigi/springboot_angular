import { Component } from '@angular/core';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  constructor(private service: ProductService){}
}
