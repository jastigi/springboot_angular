import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(private service: ProductService, private cdr: ChangeDetectorRef){ }

  ngOnInit(): void {
    this.service.findAll().subscribe(products => {
      console.log('Productos del servicio en el componente:', products);
      this.products = products;
      // Forzamos la actualización de la vista por si zone.js está fallando
      this.cdr.detectChanges();
    });
  }

  addProduct(product: Product): void {
    if (product.id > 0) {
      this.service.update(product).subscribe(productUpdated => {
        this.products = this.products.map(p =>{
          if (p.id == product.id) {
            return {...productUpdated};
          }
          return p;
        });
        this.cdr.detectChanges();
      });
    } else {
      this.service.create(product).subscribe(productNew => {
        this.products.push({...productNew});
        console.log('Producto creado:', productNew);
        this.cdr.detectChanges();
      });
    }
    this.productSelected = new Product();
    console.log(product);
  }

  onUpdateProduct(productRow: Product): void {
    this.productSelected = {...productRow};
    console.log(productRow);
  }

  onRemoveProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
    console.log(id);
  }

}
