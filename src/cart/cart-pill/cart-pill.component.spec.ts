import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPillComponent } from './cart-pill.component';

describe('CartPillComponent', () => {
  let component: CartPillComponent;
  let fixture: ComponentFixture<CartPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
