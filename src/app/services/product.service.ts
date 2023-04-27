import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import * as data from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = (data as any).default

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id === id)!
  }

}
