import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Cart, CartService } from '../cart.service';

import { CartViewComponent } from './cart-view.component';



fdescribe('CartViewComponent', () => {
  let component: CartViewComponent;
  let fixture: ComponentFixture<CartViewComponent>;
  let mockCartService: jasmine.SpyObj<CartService>;

  beforeEach(async () => {
    mockCartService = jasmine.createSpyObj('CartService', ['removeItemFromCart'], ['cart$']);
    await TestBed.configureTestingModule({
      declarations: [CartViewComponent],
      providers: [
        { provide: CartService, useValue: mockCartService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {

    const mockCart: Cart = {
      numberOfCartItems: 2,
      cartTotal: 100.01,
      items: [
        {
          itemName: 'mock-name-1',
          itemCost: 100,
          itemDesc: 'mock-desc-1',
          cartUuid: 'mock-uuid-1'
        },
        {
          itemName: 'mock-name-2',
          itemCost: .01,
          itemDesc: 'mock-desc-2',
          cartUuid: 'mock-uuid-2'
        }
      ]
    };

    const mockCartObservable: Observable<Cart> = of(mockCart);

    //@ts-ignore
    Object.getOwnPropertyDescriptor(mockCartService, 'cart$').get.and.returnValue(mockCartObservable);

    fixture = TestBed.createComponent(CartViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display our cart items', () => {
    fixture.detectChanges();

    const listItems: Element[] = fixture.nativeElement.querySelectorAll('mat-list-item');
    expect(listItems.length).toEqual(2);

    let el = listItems[0].querySelector('.sub-line');
    expect(el?.textContent).toContain('$100.00');

    el = listItems[1].querySelector('.sub-line');
    expect(el?.textContent).toContain('$0.01');

    el = listItems[0].querySelector('div[mat-line]');
    expect(el?.textContent).toContain('mock-name-1')

    el = listItems[1].querySelector('div[mat-line]');
    expect(el?.textContent).toContain('mock-name-2');

    expect(
      fixture.nativeElement.querySelector('h2').textContent
    ).toContain('2');

    expect(
      fixture.nativeElement.querySelector('h3').textContent
    ).toContain('$100.01');

  });


});
