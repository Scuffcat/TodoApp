import React, { useState } from "react";
import styled from "styled-components";
import TrashImg from "./trashcan.png"

const Container=styled.div`
    display: flex;
    padding-top: 15px;
`

const Todo=styled.div`
    font-size: 20px;
`

const Button=styled.button`
    background-color: blue;
    height: 30px;
    width: 30px;
    border-radius: 20px;
`

const Trash=styled.img`
    height: 25px;
    width: 20px;
`

function TodoItem ({todos,deleteTodo}) {
   

const updateTodo=()=> {
    deleteTodo()
}

return(
<Container>
    <Button></Button>
    <Todo>{todos[0].text}</Todo>
    <Trash src={TrashImg} onClick={updateTodo}></Trash>
</Container>
    );
}

export default TodoItem;