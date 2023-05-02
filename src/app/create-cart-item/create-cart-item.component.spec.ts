import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCartItemComponent } from './create-cart-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateCartItemComponent', () => {
  let component: CreateCartItemComponent;
  let fixture: ComponentFixture<CreateCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule, 
        ReactiveFormsModule, 
        RouterTestingModule],
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
