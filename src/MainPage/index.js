import React, { useState } from "react";
import styled from "styled-components";

import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoAdd from "../TodoAdd";


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
`


function MainPage() {
    return (
        <Background>
        <Box>
            <TodoDate></TodoDate>
            <TodoLeft></TodoLeft>
            <TodoAdd></TodoAdd>
        </Box>
        </Background>
    )
}


export default MainPage;