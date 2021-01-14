import React from 'react';
import {Status, Todo} from "../models/Settings";
import Headline from "../components/Headline";
import TodoCard from "../components/TodoCard";
import styled from "styled-components/macro";

interface TodoListProps {
    todos: Todo[]
    status: Status
}

export default function TodoPanel({todos, status}: TodoListProps) {

    const filteredTodos = todos.filter(todo => todo.status === status)

    return (
        <PanelStyled>
            <Headline title={status}/>
            <TodoCard todos = {filteredTodos}/>
        </PanelStyled>
    )

};

const PanelStyled = styled.div`
display: grid;
grid-auto-rows: min-content;
`
