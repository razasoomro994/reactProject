import React from 'react'
import TodoItem from "./TodoItem"

export default function Todos(props) {
    return (
        <div>
           <h1 className=" container text-center">Todos List</h1>
           
           { props.todos.length===0?  " No Todo In Display" :
           props.todos.map((todos)=>{
               return   <TodoItem   todos ={todos} key={todos.sno}   onDelete={props.onDelete}/>                  
               
           })
            }
        </div>
    )
}
