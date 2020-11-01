import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from "reactstrap";
import "./App.css";
import { TodoContext } from "./context/TodoContext";
import { TodoReducer } from "./context/reducer";
import TextForm from "./component/form";
import TodoList from "./component/list";

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container>
        <h1>TODO App</h1>
        <TextForm />
        <TodoList />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
