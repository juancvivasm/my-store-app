import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);

    service.addOrder({
      id: 1,
      fullName: 'Juan Carlos',
      address: 'Av Fake 999',
      creditCardNumber: 9999999999999999,
      total: 259.98,
      items: [{
        id: 1,
        name: "Book",
        price: 9.99,
        url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "You can read it!",
        quantity: 1
      },
      {
        id: 2,
        name: "Headphones",
        price: 249.99,
        url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Listen to stuff!",
        quantity: 1
      }]
    });

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns a list of orders', () => {
    expect(service.getOrders().length).toBe(1);
  });

  it('return an order', () => {
    expect(service.getOrder(1)).toEqual({
      id: 1,
      fullName: 'Juan Carlos',
      address: 'Av Fake 999',
      creditCardNumber: 9999999999999999,
      total: 259.98,
      items: [{
        id: 1,
        name: "Book",
        price: 9.99,
        url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "You can read it!",
        quantity: 1
      },
      {
        id: 2,
        name: "Headphones",
        price: 249.99,
        url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Listen to stuff!",
        quantity: 1
      }]
    });
  });

});
