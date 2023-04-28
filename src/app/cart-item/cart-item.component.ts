import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input()
  item: Product

  @Output()
  changeItem: EventEmitter<Product> = new EventEmitter

  constructor(private cartService: CartService){
    this.item = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1
    }
  }

  changeQuantity(value: number) {
    //console.log(`Cantidad: ${value}`)
    //console.log(this.item)
    this.changeItem.emit(this.item)
  }

}
