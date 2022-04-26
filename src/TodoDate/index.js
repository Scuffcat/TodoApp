import React, { useState } from "react";
import styled from "styled-components";

const Date=styled.div`
    font-size: 25px;
`

function TodoDate() {
    return(
    <>
        <Date>2022/04/26</Date>
        <Date>Tuesday</Date>
        </>
    );
}

export default TodoDate;