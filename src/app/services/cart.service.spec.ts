import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);

    service.addToCartDetails({
      id: 1,
      name: "Book",
      price: 9.99,
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "You can read it!",
      quantity: 1
    })
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns list of quantities available to select', () => {
    expect(service.getQuantities()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('adding product to cart should return a true value', () => {
    expect(service.addToCartDetails({
      id: 2,
      name: "Headphones",
      price: 249.99,
      url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Listen to stuff!",
      quantity: 1
    })).toBe(true);
  });

  it('returns a list of products in the cart', () => {
    expect(service.getCartDetails()).toEqual([{
      id: 1,
      name: "Book",
      price: 9.99,
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "You can read it!",
      quantity: 1
    }]);
  });

  it('#getTotal should return the value of the total', () => {
    expect(service.getTotal()).toBe(9.99);
  });

  it('#removeItem should return an empty list', () => {
    service.removeItem({
      id: 1,
      name: "Book",
      price: 9.99,
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "You can read it!",
      quantity: 1
    })
    expect(service.getCartDetails().length).toBe(0);
  });

});
