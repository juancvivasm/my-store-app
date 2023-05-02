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

  isValidCheckout(order: Cart): boolean {
    const { fullName, address, creditCardNumber } = order

    if (!fullName.trim()) {
      alert('Full name must be defined')
      return false
    }

    if (fullName.length < 3) {
      alert('Full name must minimum 03 characters')
      return false
    }

    if (!address.trim()) {
      alert('Address must be defined')
      return false
    }

    if (address.length < 6) {
      alert('Address must minimum 03 characters')
      return false
    }

    if (creditCardNumber.toString().length < 16) {
      alert('Credit card number must be 16 digit number')
      return false
    }

    return true
  }

  submitForm(): void {
    //console.log(`Full name: ${this.order.fullName} - Address: ${this.order.address} - Credit card number: ${this.order.creditCardNumber}`)
    if (this.isValidCheckout(this.order)) {
      this.invoice.emit(this.order)
    }   
  }

}
