import { Component, EventEmitter, Output } from '@angular/core';
import { Cart } from '../models/Cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  order: Cart

  @Output()
  invoice: EventEmitter<Cart> = new EventEmitter

  constructor() {
    this.order = {
      id: 1,
      fullName: '',
      address: '',
      creditCardNumber: 0,
      total: 0,
      items: []
    }
  }

  submitForm(): void {
    //console.log(`Full name: ${this.order.fullName} - Address: ${this.order.address} - Credit card number: ${this.order.creditCardNumber}`)
    //this.order.items = this.cartService.getCartDetails() 
    //this.order.total = this.cartService.getTotal()
    //console.log(this.order)
    this.invoice.emit(this.order)
  }

}
