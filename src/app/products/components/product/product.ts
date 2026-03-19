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

  addProduct(product: Product) {
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
    console.log(product);
  }

  onUpdateProduct(productRow: Product) {
    this.productSelected = productRow;
    console.log(productRow);
  }

}
