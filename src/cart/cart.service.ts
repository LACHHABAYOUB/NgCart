import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { InventoryItem } from 'src/inventory/models/inventory-item.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CartService {

  private readonly cart: BehaviorSubject<Cart>

  constructor() {

    const initialCart: Cart = localStorage.getItem('ngBaitCart') !== null
      ? JSON.parse(localStorage.getItem('ngBaitCart') || '')
      : {
        items: [],
        numberOfCartItems: 0,
        cartTotal: 0
      }

    this.cart = new BehaviorSubject<Cart>(initialCart);

  }

  get cart$(): Observable<Cart> {
    return this.cart.asObservable();
  }

  addItemToCart(item: InventoryItem): void {

    const currentCart = this.cart.getValue();


    const newCartItem: CartInventoryItem = {
      ...item,
      cartUuid: uuidv4()
    };

    const newItems: CartInventoryItem[] = [
      ...currentCart.items,
      newCartItem
    ];

    const newCart: Cart = {
      items: newItems,
      numberOfCartItems: newItems.length,
      cartTotal: currentCart.cartTotal + item.itemCost
    };

    this.cart.next(newCart);
    localStorage.setItem('ngBaitCart', JSON.stringify(newCart))
  }

  removeItemFromCart(item: CartInventoryItem): void {

    const currentCart = this.cart.getValue();

    const newItems = currentCart.items.filter(x => x.cartUuid !== item.cartUuid);

    const newCart: Cart = {
      items: newItems,
      numberOfCartItems: newItems.length,
      cartTotal: currentCart.cartTotal - item.itemCost
    };

    this.cart.next(newCart);
    localStorage.setItem('ngBaitCart', JSON.stringify(newCart));

  }

}

export interface CartInventoryItem extends InventoryItem {
  cartUuid: string;
}

export interface Cart {
  items: CartInventoryItem[];
  numberOfCartItems: number;
  cartTotal: number;
}


/*

const obj1 = {
  name: 'one',
  id: 1
}

const obj2 = {
  two: 'two'
}


//merge two objects into 1
const mergedObj = Object.assign(obj1, obj2);

//... === object.assign


const newObject = {
  ...obj1,
  ...obj2,
  two:'three'
}


newObject === {
  name: 'one',
  id: 1,
  two: 'three'
}


const stuff = [
  '1',
  '2',
  '3'
]

const upToFour = [
  ...stuff,
  '4'
];


upToFour === [
  '1',
  '2',
  '3',
  '4'
]



const person = {
  name: 'ian',
  address: '123 here st'
}

person.address = '123 new place';

const updatedPerson = {
  ...person,
  address: '123 new place'
}

.next(...data) anytime object changes



//Array.filter || Array.map 

*/
