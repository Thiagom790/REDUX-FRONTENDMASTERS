import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const reducer = (state = { count: 1 }) => state;

const monitorEnhacer = (createStore) => (reducer, initialState, enhacer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = end - start;
    console.log("dif", diff);

    return newState;
  };

  return createStore(monitoredReducer, initialState, enhacer);
};

const logEnhacer = (createStore) => (reducer, initialState, enhacer) => {
  const logReducer = (state, action) => {
    console.log("old state", state, action);
    const newState = reducer(state, action);
    console.log("new state", newState, action);
    return newState;
  };

  return createStore(logReducer, initialState, enhacer);
};

// enhacer é meio que um wrapper para a sua createStore para fazer alguma lógica
// const store = createStore(reducer, compose(logEnhacer, monitorEnhacer));
const store = createStore(reducer, logEnhacer);

store.dispatch({ type: "Hellow" });
