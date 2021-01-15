import React from 'react';
import styled from 'styled-components/macro'
import TodoPanel from "./TodoPanel";
import {Todo} from "../models/Settings";

interface HomeProps{
    todos: Todo[]
    advance: (id: number) => void
    deleteTodo: (id: number) => void
}

export default function Home({todos, advance, deleteTodo} : HomeProps) {

    return (
        <WrapperStyled>
            <TodoPanel todos={todos} advance={advance} deleteTodo={deleteTodo} status={'OPEN'}/>
            <TodoPanel todos={todos} advance={advance} deleteTodo={deleteTodo} status={'IN_PROGRESS'}/>
            <TodoPanel todos={todos} advance={advance} deleteTodo={deleteTodo} status={'DONE'}/>
        </WrapperStyled>
    )
}

const WrapperStyled = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`


