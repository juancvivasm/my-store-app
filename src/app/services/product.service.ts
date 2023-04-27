import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import * as data from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return (data as any).default;
  }
}
