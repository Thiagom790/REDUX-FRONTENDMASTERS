import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

// const makeLouder = (string) => string.toUpperCase();
// const repeatThreeTimes = (string) => string.repeat(3);
// const embolden = (string) => string.bold();

// const makeLouderRepeatThreeTimesEmbolden = (string) =>
//   embolden(repeatThreeTimes(makeLouder(string)));

// const makeLouderRepeatThreeTimesEmbolden = compose(
//   embolden,
//   repeatThreeTimes,
//   makeLouder
// );

// console.log(makeLouderRepeatThreeTimesEmbolden("hello"));

const initialState = { value: 0 };

const INCREMENT = "INCREMENT";
const ADD = "ADD";

// Action creator
// Função que cria a nossa action para não errarmos
const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

// a única coisa que uma action precisa ter é um type
const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    const value = state.value + 1;
    return { value };
  }

  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }

  return state;
};

// posso passar o initialState aqui
// const store = createStore(reducer, initialState);
const store = createStore(reducer);

const subscriber = () => console.log("SUBSCRIBER", store.getState());

// console.log(store);
// console.log(store.getState());
// store.subscribe(subscriber);

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(add(100));

const actions = bindActionCreators({ increment, add }, store.dispatch);

// criando um bindActionCreators manualmente
// const dispatchAdd = compose(store.dispatch, add);

const [dispatchIncrement, dispatchAdd] = [increment, add].map((fn) =>
  compose(store.dispatch, fn)
);

actions.add(100);
actions.increment();

console.log(store.getState());
