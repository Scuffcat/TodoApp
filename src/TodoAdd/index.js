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

function TodoAdd() {
    return (
    <>
        <Input></Input>
        <Button>Add</Button>
    </>
    );
}

export default TodoAdd;