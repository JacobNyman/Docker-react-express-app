import { createStore, applyMiddleware, compose } from "redux";
import todoList from "./reducers/todoList";
import createSagaMiddleware from "redux-saga";
import todoListsSaga from "./sagas/todoLists";

const initalState = {
  todoLists: [],
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

//Creating the store
//The recuders, initial state for users
const store = createStore(
  todoList,
  initalState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(todoListsSaga);

export default store;
