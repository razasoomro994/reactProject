import './App.css';
import Header from "./Components/Header"
import Todos from "./Components/Todos"
import { AddTodo } from "./Components/AddTodo"
import Footer from "./Components/Footer"
import {About} from "./About"
import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null)
    initTodo = [];
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("running succesfully on todos", todos)

    setTodos(todos.filter((e) => {
      return e != todo;

    }
    ));
    localStorage.setItem("todos", JSON.stringify(todos));

  }


  const addTodo = (title, desc) => {
    console.log("running", desc, title)
    let sno;
    if (todos.length === 0) {
      sno = 0;

    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }
    const MyTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, MyTodo]);


    console.log(MyTodo)


  }


  let [todos, setTodos] = useState(initTodo);
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos))}
  //   , [todos])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <div>

      <Router>
      <Header />

        <Switch>
          <Route  exact  path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <hr />
                <Todos todos={todos} onDelete={onDelete} />

              </>
            )
          }}>
           
          </Route>
          <Route exact path="/about">
            <About />
          </Route>


        </Switch>
        <hr />
        <Footer />
      </Router>


    </div>


  );
}

export default App;
