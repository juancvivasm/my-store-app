import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = []
  total: number = 0

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartDetails()
    this.total = this.cartService.getTotal()
  }

  changeItem(item: Product): void{
    if(item.quantity < 1){
      alert('Removed from cart!')
      this.cartService.removeItem(item)
      this.total = this.cartService.getTotal()
      this.items = this.cartService.getCartDetails()
      return 
    }

    this.cartService.changeQuantity(item);
    this.total = this.cartService.getTotal()
  }

  checkout(order: Cart){
    console.log(order)
  }
}
