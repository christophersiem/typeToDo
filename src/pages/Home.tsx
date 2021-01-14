import React from 'react';
import styled from 'styled-components/macro'
import TodoPanel from "./TodoPanel";
import {Todo} from "../models/Settings";

interface HomeProps{
    todos: Todo[]
}

export default function Home({todos} : HomeProps) {

    return (
        <WrapperStyled>
            <TodoPanel todos={todos} status={'OPEN'}/>
            <TodoPanel todos={todos} status={'IN_PROGRESS'}/>
            <TodoPanel todos={todos} status={'DONE'}/>
        </WrapperStyled>
    )
}

const WrapperStyled = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;

`


