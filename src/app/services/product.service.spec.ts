import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('returns a list of products', done => {
    const products$ = service.getProducts()
    products$.subscribe(res => {
      //console.log(`Cant: ${res.length}`)
      expect(res.length).toBeGreaterThan(1);
      done()
    })
   
  });

  it('return the detail of a product', done => {
    const expectedProduct = {
      id: 1,
      name: "Book",
      price: 9.99,
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "You can read it!",
      quantity: 1
    }
    const product$ = service.getProduct(1)
    //console.log(product)
    product$.subscribe(res => {
      if (res) {
        res.quantity = 1
      }
      expect(res).toEqual(expectedProduct);
      done()
    })
  });

});
