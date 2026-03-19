import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent implements OnInit{
  products: Product[] = [];

  constructor(private service: ProductService){ }

  ngOnInit(): void {
    this.service.findAll().subscribe(products => this.products = products);
  }
}
