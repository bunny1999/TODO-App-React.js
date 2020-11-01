import React, { useReducer,useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from "reactstrap";
import "./App.css";
import { TodoContext } from "./context/TodoContext";
import { TodoReducer } from "./context/reducer";
import TextForm from "./component/form";
import TodoList from "./component/list";
import { ADD_TODO } from "./context/action.types";

function App() {
  // const [todos,setTodos] = useState([])
  const [todos, dispatch] = useReducer(TodoReducer, []);

  useEffect(()=>{
    const localTodos = localStorage.getItem("todos");
    if(localTodos){
      // setTodos(JSON.parse(localTodos))
      JSON.parse(localTodos).forEach(todo=>{
        dispatch({
          type:ADD_TODO,
          payload:todo
        })
      })
    }
  },[])

  useEffect(()=>{
    //useState([]) will change in begining and update todos, setItem will be []
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  // const addTodo=todo=>{
  //   setTodo({...todos,todo});
  // }

  // const removeTodo=id=>{
  //   setTodo(todos.filter(todo=>todo.id !== id));
  // }

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container>
        <h1>TODO's</h1>
        <TextForm 
          // addTodo={addTodo}
        />
        <TodoList 
          // todoList={todos}
          // removeTodo={removeTodo}
        />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
