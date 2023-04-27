import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCartItemComponent } from './create-cart-item.component';

describe('CreateCartItemComponent', () => {
  let component: CreateCartItemComponent;
  let fixture: ComponentFixture<CreateCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCartItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
