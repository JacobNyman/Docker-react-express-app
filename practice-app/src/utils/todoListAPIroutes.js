import axios from "axios";

export const getAllTodoLists = async () => {
  try {
    const res = await axios.get("http://localhost:5000/todos/allTodoLists");

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postNewTodoList = async (title) => {
  try {
    await axios.post("http://localhost:5000/todos/todolist", {
      title,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (todoListId, todoId) => {
  try {
    await axios.delete(
      `http://localhost:5000/todos/deletetodo/${todoListId}/${todoId}`
    );
  } catch (error) {}
};

export const deleteTodoList = async (todoListId) => {
  try {
    await axios.delete(`http://localhost:5000/todos/deleteList/${todoListId}`);
  } catch (error) {}
};

export const postNewTodo = async (listId, text) => {
  try {
    await axios.post(`http://localhost:5000/todos/postTodo/${listId}`, {
      text,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodos = async (todoListId, todos) => {
  try {
    await axios.put(`http://localhost:5000/todos/updateTodos/${todoListId}`, {
      todos,
    });
  } catch (error) {
    console.log(error);
  }
};
