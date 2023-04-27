import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartDetails: Product[] = []
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  fullName: string = ''
  address: string = ''
  creditCardNumber: number = 0
  total: number = 0

  constructor() { }

  getQuantities(): number[] {
    return this.quantities;
  }

  getCartDetails(): Product[] {
    return this.cartDetails;
  }

  addToCartDetails(item: Product): boolean {
    const isFound = this.cartDetails.some(i => {
      if (i.id === item.id) {
        return true;
      }
      return false;
    })

    if (isFound) {
      return false
    }

    this.cartDetails.push(item);
    this.total += (item.quantity * item.price)
    console.log(this.cartDetails)
    console.log(this.total)

    return true
  }

  clearCartDetails() {
    this.cartDetails = [];
    return this.cartDetails;
  }

}
