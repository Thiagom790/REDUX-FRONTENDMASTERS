import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

// Com redux sempre tente deixar as coisas mais flatter
const initialState = {
  users: [
    { id: 1, name: "Steve" },
    { id: 2, name: "Erick" },
  ],
  tasks: [
    { title: "File the TPS reports" },
    { title: "Orders more energy drinks" },
  ],
};

const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

const addTask = (title) => ({ type: ADD_TASK, payload: title });
const addUser = (name) => ({ type: ADD_TASK, payload: name });

const userReducer = (users = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...users, action.payload];
  }

  return users;
};

const taskReducer = (tasks = initialState.tasks, action) => {
  if (action.type === ADD_TASK) {
    return [...tasks, action.payload];
  }

  return tasks;
};

// ao combinar reducers todas as actions vão passar pelos 2 quando eu der o dispatch
// todos as actions passam por todos os reducers
const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

const store = createStore(reducer);

console.log(store.getState());
