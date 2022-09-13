import produce from 'immer';
import {
  ITEM_ADDED,
  ITEM_PRICE_UPDATED,
  ITEM_REMOVED,
  ITEM_QUANTITY_UPDATED
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Hamburger', price: 12, quantity: 1 }
];

// export const reducer = (state = initialItems, action) => {
//   // para evitar que toda hora eu fique fazendo manipulações desse tipo
//   // aonde eu tenho que pegar tudo do objeto e retornar eu posso utilizar o immer
//   // if (action.type === ITEM_ADDED) {
//   //   const item = { uuid: id++, quantity: 1, ...action.payload };
//   //   return [...state, item];
//   // }

//   if (action.type === ITEM_ADDED) {
//     return produce(state, (draftState) => {
//       const item = { uuid: id++, quantity: 1, ...action.payload };
//       draftState.push(item);
//     });
//   }

//   if (action.type === ITEM_REMOVED) {
//     return state.filter((item) => item.uuid !== action.payload.uuid);
//   }

//   // if (action.type === ITEM_PRICE_UPDATED) {
//   //   const { uuid, price } = action.payload;
//   //   return state.map((item) => {
//   //     if (item.uuid === uuid) {
//   //       item.price = price;
//   //     }

//   //     return item;
//   //   });
//   // }

//   if (action.type === ITEM_PRICE_UPDATED) {
//     return produce(state, (draftState) => {
//       const item = draftState.find((item) => item.uuid === action.payload.uuid);
//       item.price = parseInt(action.payload.price, 10);
//     });
//   }

//   // if (action.type === ITEM_QUANTITY_UPDATED) {
//   //   const { uuid, quantity } = action.payload;
//   //   return state.map((item) => {
//   //     if (item.uuid !== uuid) {
//   //       return item;
//   //     }
//   //     return { ...item, quantity };
//   //   });
//   // }

//   if (action.type === ITEM_QUANTITY_UPDATED) {
//     return produce(state, (draftState) => {
//       const item = draftState.find((item) => item.uuid === action.payload.uuid);
//       item.quantity = parseInt(action.payload.quantity, 10);
//     });
//   }

//   return state;
// };

// dessa forma eu nem preciso retornar o meu estado pq ele já retorna pra mim
export const reducer = produce((state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    state.push(item);
  }

  if (action.type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === ITEM_PRICE_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = parseInt(action.payload.price, 10);
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.quantity = parseInt(action.payload.quantity, 10);
  }
}, initialItems);

export default reducer;
