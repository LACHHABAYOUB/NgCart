
export interface InventoryItem  {
    itemName: string;
    itemCost: number;
    itemDesc: string;
    itemImageUri?: string | null;
}


// const item: InventoryItem = {
//     itemName: 'bob',
//     itemCost: 23.23,
//     itemDesc: 'this is bobs',
//     //itemImageUri: undefined
// }


// let t;

// // t === undefined

// t = null;

// // t === null


// type InventoryType = 'lure' | 'live-bait' | 'line'

// let f: number | string = 5;

// f = '5'

// const myType: InventoryType = 'live-bait';


// //-------------------------------------

// const thing = 5;

// thing = 6;


// const stuff = {
//     name: 'Ian',
//     id: 123
// };

// stuff.name = 'Scott';

// // const mean stuff ---> {  name -> can be mutated  }


// const innerStuff = {
//     name: 'five'
// }

// const stuffContainer = {
//     stuff: innerStuff
// }


// innerStuff.name = 'six'


// if(stuffContainer.stuff.name === 'five') { 

//     ///true
// }




