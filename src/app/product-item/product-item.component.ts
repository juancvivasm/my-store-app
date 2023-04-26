import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input()
  product: Product

  quantities: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(){
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1
    }
  }

}
