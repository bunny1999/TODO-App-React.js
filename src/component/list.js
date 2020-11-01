import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import { TodoContext } from "../context/TodoContext";
import { FaCheckDouble } from "react-icons/fa";
import { REMOVE_TODO } from "../context/action.types";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
            onClick={()=>dispatch({
              type: REMOVE_TODO,
              payload: todo.id,
            })}
            className="float-right"
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default TodoList;
