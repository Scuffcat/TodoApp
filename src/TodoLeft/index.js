import React, { useState } from "react";
import styled from "styled-components";

const Left=styled.div`
    font-size: 20px;
`

function TodoLeft({todos}) {
    return(
        <>
        <Left>{todos.length}</Left>
        {/* <Left>{age}</Left> */}
        </>
        
    );
}

export default TodoLeft;