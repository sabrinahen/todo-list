import React, {useState} from 'react'

const Display = (props)=> {

    const {todoList, setTodoList} = props;

    const deleteButton = (idFromBelow) =>{
        todo
    }


    return (
        <div>
            {
            todoList.map((todo, index)=>(
                <div key={index}>
                    <p>{todo.todoText}</p>
                    <button onClick={()=> deleteButton(todo.id)}>Delete</button>
                </div>
            ))
            }
        </div>
    )
}

export default Display;