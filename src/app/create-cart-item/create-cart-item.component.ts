import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-create-cart-item',
  templateUrl: './create-cart-item.component.html',
  styleUrls: ['./create-cart-item.component.css']
})
export class CreateCartItemComponent implements OnInit {
  @Input()
  item: Product

  quantities: number[] = []

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

  ngOnInit(): void {
    this.quantities = this.cartService.getQuantities()
  }

  addItem(): void{
    const isAdded = this.cartService.addToCartDetails(this.item)
    let msg: string = 'Added to cart!'
    if(!isAdded){
      msg = 'Already added to cart!'
    }
    alert(msg)
  }

}
