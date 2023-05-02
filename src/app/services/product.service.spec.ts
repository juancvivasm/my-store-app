import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns a list of products', () => {
    expect(service.getProducts().length).toBeGreaterThan(1);
  });

  it('return the detail of a product', () => {
    let product = service.getProduct(1)
    //console.log(product)
    expect(product).toEqual({
      id: 1,
      name: "Book",
      price: 9.99,
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "You can read it!",
      quantity: 1
    });
  });

});
