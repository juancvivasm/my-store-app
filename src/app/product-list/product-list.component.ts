import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import * as data from '../../assets/data.json'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = (data as any).default;
  quantities: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  ngOnInit(): void {
    //console.log(this.products);
    for (let index = 0; index < this.products.length; index++) {
      const product = this.products[index];
      product["quantity"] = 1;
    }
  }

}
