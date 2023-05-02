import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemDetailComponent } from './product-item-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateCartItemComponent } from '../create-cart-item/create-cart-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ProductItemDetailComponent', () => {
  let component: ProductItemDetailComponent;
  let fixture: ComponentFixture<ProductItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        FormsModule, 
        ReactiveFormsModule],
      declarations: [ ProductItemDetailComponent, CreateCartItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
