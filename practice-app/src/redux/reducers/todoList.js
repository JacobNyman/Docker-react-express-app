import { types } from "../actions/todoList";

const initialState = {
  todoLists: [],
  isLoading: false,
  errorMessage: "",
  noContentOnServer: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TODOLISTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_TODOLISTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoLists: action.payload,
        noContent: action.payload.length === 0 ? true : false,
      };
    case types.GET_TODOLISTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case types.DELETE_TODOLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.DELETE_TODOLIST_SUCCESS: {
      const { todoListIndex } = action.payload;

      return {
        ...state,
        isLoading: false,
        todoLists: [...state.todoLists.filter((_, i) => i !== todoListIndex)],
      };
    }

    case types.DELETE_TODOLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case types.DELETE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.DELETE_TODO_SUCCESS: {
      const { todoListIndex, todoIndex } = action.payload;
      return {
        ...state,
        isLoading: false,
        todoLists: [
          ...state.todoLists.map((todoList, i) => {
            if (i === todoListIndex) {
              return {
                ...todoList,
                todos: [todoList.todos.filter((_, j) => j !== todoIndex)],
              };
            }
            return todoList;
          }),
        ],
      };
    }
    case types.DELETE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case types.POST_TODOLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.POST_TODOLIST_SUCCESS: {
      const { title } = action.payload;
      return {
        ...state,
        isLoading: false,
        todoLists: [...state.todoLists, { title, todos: [] }],
      };
    }
    case types.POST_TODOLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case types.POST_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.POST_TODO_SUCCESS: {
      const { todoListIndex, text } = action.payload;
      return {
        ...state,
        isLoading: false,
        todoLists: [
          ...state.todoLists.map((todoList, i) => {
            if (i === todoListIndex) {
              return {
                ...todoList,
                todos: [...todoList.todos, { text }],
              };
            }
            return todoList;
          }),
        ],
      };
    }
    case types.POST_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case types.UPDATE_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.UPDATE_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case types.UPDATE_TODO_LOCAL: {
      const { todoListIndex, todoIndex, text } = action.payload;

      return {
        ...state,
        todoLists: [
          ...state.todoLists.map((todoList, i) => {
            if (i === todoListIndex) {
              return {
                ...state.todoLists[todoListIndex],
                todos: [
                  ...state.todoLists[todoListIndex].todos.map((todo, j) => {
                    if (j === todoIndex) {
                      return {
                        text,
                      };
                    }
                    return todo;
                  }),
                ],
              };
            }
            return todoList;
          }),
        ],
      };
    }
    default:
      return state;
  }
};
