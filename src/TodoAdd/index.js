import React, { useState } from "react";
import styled from "styled-components";

const Input=styled.input`
`

const Button=styled.button`
    width: 50px;
    height: 25px;
    background-color: teal;
    color: white;
`

function TodoAdd({todos, updateTodo}) {
    const [todo, setTodo]=useState({
        id: null,
        text: "",
        isDone: false,
    });

    const addTodo=(e)=>{
        const {name,value}=e.target
        setTodo ({
            id: todos.length+1,
            text: value,
            isDone: false,
        })
      

        console.log(todo)
    }

    const onClickChange=()=>{
        updateTodo(todo)
        
    }

    return (
    <>
        <Input type="text" name="text" onChange={addTodo}></Input> 
        <Button onClick={onClickChange}>Add</Button>
    </>
    );
}

export default TodoAdd;