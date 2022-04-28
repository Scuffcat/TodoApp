import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 15px;
`

function TodoDate() {
    const today=new Date();


    return(
    <Container>
        <div>{today.getFullYear()}</div>/
        <div>{today.getMonth()+1}</div>/
        <div>{today.getDate()}</div>
    </Container>
    );
}

export default TodoDate;