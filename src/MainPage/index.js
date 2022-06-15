import React, { useState } from "react";
import styled from "styled-components"; 

import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoAdd from "../TodoAdd";
import TodoList from "../TodoList";

const Background=styled.div`
    background-color: #28bec6;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Box=styled.div`
    background-color: white;
    height: 500px;
    width: 400px;
    padding: 15px;
`


function MainPage() {
    const [todos,setTodos]=useState([])  

    const addTodo=(todo)=> {
        setTodos([...todos,todo])
    };
    console.log(todos);

    const deleteItem = (id) => {
        console.log(id)
        const newTodos=todos.filter((todo)=>todo.id != id)
        setTodos(newTodos)
    }

    const changeIsDone2=(id) => {
        const currentTodo=todos[id-1];
        if ({isDone: true}) {
            setTodos({isDone: false})
        } else {
            setTodos({isDone: false})
        }
        setTodos([...todos])
    };

    return (
        <Background>
        <Box>
            <TodoDate></TodoDate>
            <TodoLeft todos={todos}></TodoLeft>
            <br></br>
            <TodoAdd todos={todos} updateTodo={addTodo}></TodoAdd>
            <TodoList todos={todos} deleteTodo={deleteItem} changeIsDone={changeIsDone2}></TodoList>
        </Box>
        </Background>
    )
}

export default MainPage;