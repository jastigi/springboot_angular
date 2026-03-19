import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormComponent {

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
  };

  @Output() newProductSubmit = new EventEmitter<Product>();

  onSubmit() {
    this.newProductSubmit.emit(this.product);
    console.log(this.product);
  }

}
