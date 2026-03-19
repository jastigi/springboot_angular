import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormComponent {

  @Input() product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
  };

  @Output() newProductSubmit = new EventEmitter<Product>();

  onSubmit(productForm: NgForm): void {
    if (productForm.valid) {
      this.newProductSubmit.emit(this.product);
      console.log(this.product);
    }
    productForm.reset();
    productForm.resetForm();
  }

  onNewProduct(): void {
    this.product = new Product();
  }

}
