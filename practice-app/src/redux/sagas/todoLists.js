import { all, call, put, takeEvery } from "redux-saga/effects";

import {
  getTodoListsFailure,
  getTodoListsSuccess,
  deleteTodoListFailure,
  deleteTodoListSuccess,
  types,
  deleteTodoFailure,
  deleteTodoSuccess,
  postTodoListSuccess,
  postTodoListFailure,
  postTodoFailure,
  postTodoSuccess,
  updateTodosSuccess,
  updateTodosFailure,
} from "../actions/todoList";

import {
  getAllTodoLists,
  deleteTodoList,
  deleteTodo,
  postNewTodoList,
  postNewTodo,
  updateTodos,
} from "../../utils/todoListAPIroutes";

function* getTodoListsSaga() {
  try {
    const todoLists = yield call(getAllTodoLists);

    yield put(getTodoListsSuccess(todoLists));
  } catch (error) {
    yield put(getTodoListsFailure(error.message));
  }
}

function* deleteTodoListSaga(action) {
  const { todoListId, todoListIndex } = action.payload;
  try {
    yield call(deleteTodoList, todoListId);

    yield put(deleteTodoListSuccess(todoListIndex));
  } catch (error) {
    yield put(deleteTodoListFailure(error.message));
  }
}

function* deleteTodoSaga(action) {
  const { todoListId, todoId, todoListIndex, todoIndex } = action.payload;
  try {
    yield call(deleteTodo, todoListId, todoId);

    yield put(deleteTodoSuccess(todoListIndex, todoIndex));
  } catch (error) {
    yield put(deleteTodoFailure(error.message));
  }
}

function* postTodoListSaga(action) {
  const { title } = action.payload;
  console.log(title);

  try {
    yield call(postNewTodoList, title);

    yield put(postTodoListSuccess(title));
  } catch (error) {
    yield put(postTodoListFailure(error.message));
  }
}

function* postTodoSaga(action) {
  const { todoListId, todoListIndex, text } = action.payload;
  try {
    yield call(postNewTodo, todoListId, text);

    yield put(postTodoSuccess(todoListIndex, text));
  } catch (error) {
    yield put(postTodoFailure(error.message));
  }
}

function* updateTodosSaga(action) {
  const { todoListId, todos } = action.payload;
  try {
    yield call(updateTodos, todoListId, todos);

    yield put(updateTodosSuccess());
  } catch (error) {
    yield put(updateTodosFailure(error.message));
  }
}

export default function* todoListsSaga() {
  yield all([
    takeEvery(types.GET_TODOLISTS_REQUEST, getTodoListsSaga),
    takeEvery(types.DELETE_TODOLIST_REQUEST, deleteTodoListSaga),
    takeEvery(types.DELETE_TODO_REQUEST, deleteTodoSaga),
    takeEvery(types.POST_TODOLIST_REQUEST, postTodoListSaga),
    takeEvery(types.POST_TODO_REQUEST, postTodoSaga),
    takeEvery(types.UPDATE_TODOS_REQUEST, updateTodosSaga),
  ]);
}
