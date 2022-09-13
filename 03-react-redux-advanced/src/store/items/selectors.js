/*
 biblioteca bem similar ao useMemo que nos ajuda a fazer cache de 
 valores
*/
import { createSelector } from 'reselect';

export const selectItem = (state, props) => {
  return state.items.find((item) => item.uuid === props.uuid);
};

export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.price * item.quantity
);

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

// Se esse array de items for igual ao da ultima vez ele não será computado novamente
// Mesmo se for em vários map dispatch to props
export const selectSubtotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  //os args são os valores das funções retornados pelos items dos array acima
  (subtotal, tipPercentage) => subtotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);
