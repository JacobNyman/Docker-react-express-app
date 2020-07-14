export const types = {
  GET_TODOLISTS_REQUEST: "GET_TODOLISTS_REQUEST",
  GET_TODOLISTS_FAILURE: "GET_TODOLISTS_FAILURE",
  GET_TODOLISTS_SUCCESS: "GET_TODOLISTS_SUCCESS",
  DELETE_TODOLIST_REQUEST: "DELETE_TODOLIST_REQUEST",
  DELETE_TODOLIST_FAILURE: "DELETE_TODOLIST_FAILURE",
  DELETE_TODOLIST_SUCCESS: "DELETE_TODOLIST_SUCCESS",
  DELETE_TODO_REQUEST: "DELETE_TODO_REQUEST",
  DELETE_TODO_FAILURE: "DELETE_TODO_FAILURE",
  DELETE_TODO_SUCCESS: "DELETE_TODO_SUCCESS",
  POST_TODOLIST_REQUEST: "POST_TODOLIST_REQUEST",
  POST_TODOLIST_FAILURE: "POST_TODOLIST_FAILURE",
  POST_TODOLIST_SUCCESS: "POST_TODOLIST_SUCCESS",
  POST_TODO_REQUEST: "POST_TODO_REQUEST",
  POST_TODO_FAILURE: "POST_TODO_FAILURE",
  POST_TODO_SUCCESS: "POST_TODO_SUCCESS",
  UPDATE_TODOS_REQUEST: "UPDATE_TODOS_REQUEST",
  UPDATE_TODOS_FAILURE: "UPDATE_TODOS_FAILURE",
  UPDATE_TODOS_SUCCESS: "UPDATE_TODOS_SUCCESS",
  UPDATE_TODO_LOCAL: "UPDATE_TODO_LOCAL",
};

// TODO: Success need index while Request needs ._id
// so change argurments from success to request

// Get todo lists
export const getTodoLists = () => ({
  type: types.GET_TODOLISTS_REQUEST,
});

export const getTodoListsFailure = (errorMessage) => ({
  type: types.GET_TODOLISTS_FAILURE,
  payload: errorMessage,
});

export const getTodoListsSuccess = (todoLists) => ({
  type: types.GET_TODOLISTS_SUCCESS,
  payload: todoLists,
});

// Delete todo lists
export const deleteTodoList = (todoListId, todoListIndex) => ({
  type: types.DELETE_TODOLIST_REQUEST,
  payload: { todoListId, todoListIndex },
});

export const deleteTodoListFailure = (errorMessage) => ({
  type: types.DELETE_TODOLIST_FAILURE,
  payload: errorMessage,
});

export const deleteTodoListSuccess = (todoListIndex) => ({
  type: types.DELETE_TODOLIST_SUCCESS,
  payload: { todoListIndex },
});

// Delete todo
export const deleteTodo = (todoListId, todoId, todoListIndex, todoIndex) => ({
  type: types.DELETE_TODO_REQUEST,
  payload: { todoListId, todoId, todoListIndex, todoIndex },
});

export const deleteTodoFailure = (errorMessage) => ({
  type: types.DELETE_TODO_FAILURE,
  payload: errorMessage,
});

export const deleteTodoSuccess = (todoListIndex, todoIndex) => ({
  type: types.DELETE_TODO_SUCCESS,
  payload: {
    todoListIndex,
    todoIndex,
  },
});

// Post todo list
export const postTodoList = (title) => ({
  type: types.POST_TODOLIST_REQUEST,
  payload: { title },
});

export const postTodoListFailure = (errorMessage) => ({
  type: types.POST_TODOLIST_FAILURE,
  payload: errorMessage,
});

export const postTodoListSuccess = (title) => ({
  type: types.POST_TODOLIST_SUCCESS,
  payload: title,
});

// Post todo
export const postTodo = (todoListId, todoListIndex, text) => ({
  type: types.POST_TODO_REQUEST,
  payload: { todoListId, todoListIndex, text },
});

export const postTodoFailure = (errorMessage) => ({
  type: types.POST_TODO_FAILURE,
  payload: types.POST_TODO_FAILURE,
});

export const postTodoSuccess = (todoListIndex, text) => ({
  type: types.POST_TODO_SUCCESS,
  payload: { todoListIndex, text },
});

// Update todos
export const updateTodosAction = (todoListId, todos) => ({
  type: types.UPDATE_TODOS_REQUEST,
  payload: { todoListId, todos },
});

export const updateTodosFailure = (errorMessage) => ({
  type: types.UPDATE_TODOS_FAILURE,
  payload: errorMessage,
});

export const updateTodosSuccess = () => ({
  type: types.UPDATE_TODOS_SUCCESS,
});

// Update Todo Local
export const updateTodoLocal = (todoListIndex, todoIndex, text) => ({
  type: types.UPDATE_TODO_LOCAL,
  payload: { todoListIndex, todoIndex, text },
});
