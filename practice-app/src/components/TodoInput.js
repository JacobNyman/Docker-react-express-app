import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";

import { Input } from "../styles";
import { updateTodoLocal } from "../redux/actions/todoList";

const TodoInput = (props) => {
  const [inputProps, setInputProps] = useState(props);
  const { todo, todoListIndex, todoIndex } = inputProps;

  const { dispatchUpdateTodoLocal } = props;
  useEffect(() => {
    setInputProps(props);
  }, [props]);

  const newTodoTextChange = useCallback(
    (e) => {
      dispatchUpdateTodoLocal(todoListIndex, todoIndex, e.target.value);
    },
    [dispatchUpdateTodoLocal, todoListIndex, todoIndex]
  );

  return (
    <Input
      placeholder="Enter Todo..."
      key={todoIndex}
      id={todoListIndex}
      value={todo.text}
      onChange={newTodoTextChange}
    />
  );
};

const mapDispatchToProps = {
  dispatchUpdateTodoLocal: updateTodoLocal,
};

export default connect(null, mapDispatchToProps)(TodoInput);
