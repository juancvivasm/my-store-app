import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartDetails: Product[] = []
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  total: number = 0

  constructor() { }

  getQuantities(): number[] {
    return this.quantities;
  }

  getCartDetails(): Product[] {
    return this.cartDetails
  }

  addToCartDetails(item: Product): boolean {
    const isFound = this.cartDetails.some(i => {
      if (i.id === item.id) {
        return true
      }
      return false
    })

    if (isFound) {
      return false
    }

    this.cartDetails.push(item);
    this.total += (item.quantity * item.price)
    //console.log(this.cartDetails)
    //console.log(this.total)

    return true
  }

  getTotal(): number {
    return _.round(this.total, 2)
  }

  changeQuantity(item: Product): void {
    //console.log(item)
    const index = this.cartDetails.findIndex(i => {
      return i.id === item.id;
    });
    this.cartDetails[index].quantity = item.quantity;
    this.total = this.calculateTotal()
  }

  removeItem(item: Product): void {
    this.cartDetails = this.cartDetails.filter(i => i.id !== item.id)
    this.total = this.calculateTotal()
  }

  calculateTotal(): number {
    let total = 0;
    this.cartDetails.forEach((i) => {
      total += (i.quantity * i.price);
    });
    return total;
  }

  clearCart(): void {
    this.cartDetails = [];
    this.total = 0;
    //return this.cartDetails;
  }

}
