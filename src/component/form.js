import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FormGroup,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";
import { TodoContext } from "../context/TodoContext";
import { v4 } from "uuid";
import { ADD_TODO } from "../context/action.types";

const TextForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      alert("Enter Some TODO First!");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setTodoString("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Write New TODO..."
            name="todo"
            id="todo"
            value={todoString}
            onChange={e => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button onClick={onSubmit} color="warning">
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TextForm;
