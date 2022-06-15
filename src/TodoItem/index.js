import React, { useState } from "react";
import TrashImg from "./trashcan.png"
import styled, { css } from "styled-components"

const Container=styled.div`
    display: flex;
    padding-top: 15px;
`

const Todo=styled.div`
    font-size: 20px;
`

const Button=styled.button`
    height: 30px;
    width: 30px;
    border-radius: 20px;
    border: 3px solid #106cde;
    ${(props) => 
    props.isDone &&
    css`
    background-color: #106cde;
`}
`;

const Trash=styled.img`
    height: 25px;
    width: 20px;
`

const Text=styled.h2`
`

function TodoItem ({todo, deleteTodo, changeIsDone}) {

const updateTodo=()=> {
    deleteTodo(todo.id)
}

return(
<Container>
    <Button isDone={changeIsDone.isDone}></Button>
    <Text>{todo.text}</Text>
    <Trash src={TrashImg} onClick={updateTodo}></Trash>
</Container>
    );
}

export default TodoItem;