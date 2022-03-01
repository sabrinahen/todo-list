import React, {useEffect, useState} from 'react'

const Display = (props)=> {

    const {todoList, setTodoList} = props;

    const deleteButton = (idFromBelow) =>{
        setTodoList(todoList.filter((todo, index)=>todo.id !== idFromBelow));
    }

    // const handleCompleted = (todoFromBelow)=>{
    //     todoFromBelow.markedChecked = !todoFromBelow.markedChecked;
    //     setTodoList([...todoList])
    // }

    const handleCompleted = (todoFromBelow) =>{
        let updateTodos = todoList.map((todo)=>{
            if(todo === todoFromBelow){
                let newTodo = {...todo};
                newTodo.markedChecked = !todo.markedChecked;
                return newTodo;
            }
            else{
                return todo;
            }
        })
        setTodoList(updateTodos);
    }

    const styled = (markedChecked)=>{
        if(markedChecked === true){
            return "completed"
        }
        else{
            return "notCompleted"
        }
    }

    return (
        <div>
            {
            todoList.map((todo, index)=>(
                <div key={index}>
                    <p className={styled(todo.markedChecked)}>{todo.todoText}</p>
                    <input onClick={()=>handleCompleted(todo)} type="checkbox"/>
                    <button onClick={()=> deleteButton(todo.id)}>Delete</button>
                </div>
            ))
            }
        </div>
    )
}

export default Display;