import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { FormComponent } from "../form/form";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent implements OnInit{

  products: Product[] = [];

  productSelected: Product = new Product();

  constructor(private service: ProductService){ }

  ngOnInit(): void {
    this.service.findAll().subscribe(products => this.products = products);
  }

  addProduct(product: Product): void {
    if (product.id > 0) {
      this.products = this.products.map(p =>{
        if (p.id == product.id) {
          return {...product};
        }
        return p;
      });
    } else {
      product.id = this.products.length + 1;
      this.products.push(product);
    }
    this.productSelected = new Product();
    console.log(product);
  }

  onUpdateProduct(productRow: Product): void {
    this.productSelected = productRow;
    console.log(productRow);
  }

  onRemoveProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
    console.log(id);
  }

}
