import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/Cart';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = []
  total: number = 0

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartDetails()
    this.total = this.cartService.getTotal()
  }

  changeItem(item: Product): void {
    if (item.quantity < 1) {
      alert('Removed from cart!')
      this.cartService.removeItem(item)
      this.total = this.cartService.getTotal()
      this.items = this.cartService.getCartDetails()
      return
    }

    this.cartService.changeQuantity(item);
    this.total = this.cartService.getTotal()
  }

  checkout(order: Cart): void {
    order.items = this.cartService.getCartDetails()
    order.total = this.cartService.getTotal()
    //console.log(order)
    let orderId = this.orderService.addOrder(order)
    //console.log(orderId)

    this.router.navigate(['/success', orderId ]);

    this.cartService.clearCart()
    this.total = this.cartService.getTotal()
    this.items = this.cartService.getCartDetails()
    
  }
}
