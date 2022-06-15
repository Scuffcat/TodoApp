import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem";

const Container=styled.div`
    display: flex;
    flex-direction: column;
`

function TodoList( {todos, deleteTodo, changeIsDone} ) {
    return (
        <>
        <Container>
            {todos.map((todo) => (
                <TodoItem todo={todo} deleteTodo={deleteTodo} changeIsDone={changeIsDone}></TodoItem>
            ))}
        </Container>
        </>
    );
}

export default TodoList;