import React, {useState} from 'react'

const Display = (props)=> {

    const {todoList, setTodoList} = props;




    return (
        <div>
            {
            todoList.map((todo, index)=>(
                <div key={index}>
                    <p>{todo}</p>
                </div>
            ))
            }
        </div>
    )
}

export default Display;