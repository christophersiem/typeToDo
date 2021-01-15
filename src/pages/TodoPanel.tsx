import React from 'react';
import {Status, Todo} from "../models/Settings";
import Headline from "../components/Headline";
import TodoCard from "../components/TodoCard";
import styled from "styled-components/macro";

interface TodoListProps {
    todos: Todo[]
    status: Status
    advance: (id: number) => void;
    deleteTodo: (id: number) => void
}


export default function TodoPanel({todos, status, advance, deleteTodo}: TodoListProps) {
    const filteredTodos = todos.filter(todo => todo.status === status)

    return (
        <PanelStyled>
            <Headline title={status}/>
            <TodoCard todos={filteredTodos} advance={advance} deleteTodo={deleteTodo}/>
        </PanelStyled>
    )

};

const PanelStyled = styled.div`
  display: grid;
  height: 100vh;
  grid-auto-rows: min-content;
  justify-content: center;
  border-right: 3px dashed orange;

`
