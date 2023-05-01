import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Cart[] = []

  constructor() { }

  getOrders(): Cart[] {
    return this.orders
  }

  getOrder(id: number): Cart {
    return this.orders.find(o => o.id === id)!
  }

  addOrder(order: Cart): number {
    let maxId: number = 0

    if (this.orders.length) {
      const ids = this.orders.map(o => {
        return o.id;
      });
      //console.log(ids);

      maxId = Math.max(...ids);
      //console.log(maxId);
    }

    order.id = maxId + 1;
    this.orders.push(order)

    //console.log(this.orders)
    return order.id
  }

}
