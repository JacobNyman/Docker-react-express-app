import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";

import {
  Title,
  ButtonText,
  Wrapper,
  NewListRow,
  MyButton,
  ContentWrapper,
  TitleRow,
  Input,
  Form,
  RemoveButton,
  TodoRow,
  RemoveListButton,
  SubmitButton,
} from "../styles";

import TodoInput from "./TodoInput";

import {
  getTodoLists,
  postTodoList,
  postTodo,
  deleteTodoList,
  deleteTodo,
  updateTodosAction,
} from "../redux/actions/todoList";

const StartScreen = ({
  dispatchGetTodoLists,
  reduxTodoLists,
  reduxIsLoading,
  reduxNoContent,
  dispatchPostTodo,
  dispatchPostTodoList,
  dispatchUpdateTodos,
  dispatchDeleteTodo,
  dispatchDeleteTodoList,
}) => {
  const [newTodoList, setNewTodoList] = useState(false);
  const [listName, setListName] = useState("");

  useEffect(() => {
    if (!reduxNoContent) {
      dispatchGetTodoLists();
    }
  }, [dispatchGetTodoLists, reduxNoContent]);

  const addTodo = useCallback(
    async (todoListId, todoListIndex) => {
      dispatchPostTodo(todoListId, todoListIndex, "");
    },
    [dispatchPostTodo]
  );

  const addTodoList = () => {
    setNewTodoList(true);
  };

  const handleSubmit = async () => {
    dispatchPostTodoList(listName);

    setNewTodoList(false);
  };

  const handleSavedList = async (e, todoListId, todoListIndex) => {
    e.preventDefault();

    const todosList = reduxTodoLists[todoListIndex].todos.slice();
    dispatchUpdateTodos(todoListId, todosList);
  };

  const handleRemoveTodo = async (
    todoListId,
    todoId,
    todoListIndex,
    todoIndex
  ) => {
    dispatchDeleteTodo(todoListId, todoId, todoListIndex, todoIndex);
  };

  const handleRemoveTodoList = async (todoListId, todoListIndex) => {
    dispatchDeleteTodoList(todoListId, todoListIndex);
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <TitleRow>
          <Title inputColor="">Todo List App</Title>
        </TitleRow>
        {reduxIsLoading ? (
          <TitleRow>
            <Title inputColor="">Loading</Title>
          </TitleRow>
        ) : (
          <>
            <NewListRow>
              <ButtonText inputColor="">New Todo List</ButtonText>
              <MyButton onClick={addTodoList}>+</MyButton>
            </NewListRow>
            {newTodoList && (
              <Form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  value={listName}
                  placeholder="Enter list name..."
                  onChange={(e) => setListName(e.target.value)}
                />
                <Input type="submit" value="Submit" />
              </Form>
            )}
            {reduxTodoLists.map((todoList, todoListIndex) => {
              return (
                <div key={todoList._id}>
                  <TodoRow>
                    <Title key={todoListIndex}>{todoList.title}</Title>
                    <RemoveListButton
                      onClick={() =>
                        handleRemoveTodoList(todoList._id, todoListIndex)
                      }
                    >
                      Remove List
                    </RemoveListButton>
                  </TodoRow>
                  <Form
                    onSubmit={(e) =>
                      handleSavedList(e, todoList._id, todoListIndex)
                    }
                  >
                    {todoList.todos.map((todo, todoIndex) => (
                      <TodoRow>
                        <TodoInput
                          key={todoIndex}
                          todo={todo}
                          todoListIndex={todoListIndex}
                          todoIndex={todoIndex}
                        />
                        <RemoveButton
                          onClick={() =>
                            handleRemoveTodo(
                              todoList._id,
                              todo._id,
                              todoListIndex,
                              todoIndex
                            )
                          }
                        >
                          x
                        </RemoveButton>
                      </TodoRow>
                    ))}
                    {todoList.todos.length !== 0 && (
                      <SubmitButton type="submit" value="Submit" />
                    )}
                  </Form>
                  <NewListRow>
                    <ButtonText inputColor="">Add todo</ButtonText>
                    <MyButton
                      onClick={() => addTodo(todoList._id, todoListIndex)}
                    >
                      +
                    </MyButton>
                  </NewListRow>
                </div>
              );
            })}
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

const mapDispatchToProps = {
  dispatchGetTodoLists: getTodoLists,
  dispatchPostTodoList: postTodoList,
  dispatchPostTodo: postTodo,
  dispatchDeleteTodoList: deleteTodoList,
  dispatchDeleteTodo: deleteTodo,
  dispatchUpdateTodos: updateTodosAction,
};

const mapStateToProps = ({ todoLists, isLoading, noContent }) => ({
  reduxTodoLists: todoLists,
  reduxIsLoading: isLoading,
  reduxNoContent: noContent,
});

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
