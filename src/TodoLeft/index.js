import React, { useState } from "react";
import styled from "styled-components";

const Left=styled.div`
    font-size: 20px;
    padding-bottom: 20px;
`

function TodoLeft() {
    return (
        <Left>2 todos left</Left>
    );
}

export default TodoLeft;