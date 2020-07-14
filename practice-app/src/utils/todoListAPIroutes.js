import axios from "axios";

export const getAllTodoLists = async () => {
  try {
    const res = await axios.get("/todos/allTodoLists");

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postNewTodoList = async (title) => {
  try {
    await axios.post("/todos/todolist", {
      title,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (todoListId, todoId) => {
  try {
    await axios.delete(`/todos/deletetodo/${todoListId}/${todoId}`);
  } catch (error) {}
};

export const deleteTodoList = async (todoListId) => {
  try {
    await axios.delete(`/todos/deleteList/${todoListId}`);
  } catch (error) {}
};

export const postNewTodo = async (listId, text) => {
  try {
    await axios.post(`/todos/postTodo/${listId}`, {
      text,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodos = async (todoListId, todos) => {
  try {
    await axios.put(`/todos/updateTodos/${todoListId}`, {
      todos,
    });
  } catch (error) {
    console.log(error);
  }
};
