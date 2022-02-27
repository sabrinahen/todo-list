import React, {useState} from 'react'

const Form = (props)=> {

    const {todoList, setTodoList} = props;
    const [todoText, setTodoText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        setTodoList([
            ...todoList,
            todoText
        ])
        setTodoText("")
    }




    return (
        <div>
            <h1>I Have So Much To Do</h1>
            <form onSubmit={submitHandler}>
                {/* onSubmit={(e)=>submitHandler} is the same thing as above */}
                <input onChange={(e)=>setTodoText(e.target.value)} type="text" value={todoText}/>
                <button>Another Thing To Do</button>
            </form>
        </div>
    )
}

export default Form;