import React from 'react'
import {Todos} from './Todos'

export default function TodoItem({todos , onDelete}) {
    return (
        <div className="container  text-center my-3">
            <h4>{todos.title}</h4>
            <p> {todos.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
        </div>
    )
}
