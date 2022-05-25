import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    font-size: 20px;
`

const DayName=styled.div``


function TodoDate() {
    const today=new Date();

    const dayName=today.toLocaleString("en-US",{ weekday: "long"});

    return(
    <Container>
        <div>{today.getFullYear()}/{today.getMonth()+1}/{today.getDate()}</div>
        <DayName>{dayName}</DayName>
    </Container>
    );
}

export default TodoDate;