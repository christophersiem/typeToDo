import React from 'react';
import {Todo} from "../models/Settings";

import styled from "styled-components";

interface TodoCardProps {
    todos: Todo[]
}

export default function TodoCard({todos}: TodoCardProps) {
    return (
        <WrapperStyled>
            {todos.map(todo => <StyledCard key={todo.title}>{todo.title}</StyledCard>)}
        </WrapperStyled>
    )
};

const WrapperStyled = styled.div`
display: grid;
justify-content: center;
`

const StyledCard = styled.div`
max-width: 250px;
border: 1px solid black;
background: blanchedalmond;
padding:10px;
margin: 10px;

`
