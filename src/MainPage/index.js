import React, { useState } from "react";
import styled from "styled-components"; 

import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoAdd from "../TodoAdd";
import TodoItem from "../TodoItem";


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
    const [todos,setTodos]=useState([
        { isDone: false, text: "hello", id: 1}
    ])  

    const addTodo=(todo)=> {
        setTodos([...todos,todo])
    };
    console.log(todos);


    // const [age, setAge]=useState(6)
    // age={age}
    
    const [studentname, setStudentname]=useState({firstname: "default", lastname: "default"});

    const deleteItem = () => {
        setTodos([])
    }
    return (
        <Background>
        <Box>
            <TodoDate></TodoDate>
            <TodoLeft todos={todos}></TodoLeft>
            <br></br>
            <TodoAdd todos={todos} updateTodo={addTodo}></TodoAdd>
            <TodoItem todos={todos} deleteTodo={deleteItem}></TodoItem>
        </Box>
        </Background>
    )
}

export default MainPage;