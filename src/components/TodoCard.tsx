import React from 'react';
import {Todo} from "../models/Settings";
import styled from "styled-components";


interface TodoCardProps {
    todos: Todo[]
    advance: (id: number) => void
    deleteTodo: (id: number) => void
}


export default function TodoCard({todos, advance, deleteTodo}: TodoCardProps) {

    const onClickDelete = (event: React.MouseEvent, id: number) => {
        event.stopPropagation()
        deleteTodo(id)
    }
    return (

        <div>
            {todos.map(todo =>
                <div onClick={() => advance(todo.id)}>
                    <CardStyled key={todo.title} >{todo.title}
                        <ButtonStyled onClick={(event) => onClickDelete(event, todo.id)}>delete</ButtonStyled>
                    </CardStyled>
                </div>)}
        </div>

    )
};


const CardStyled = styled.div`
  max-width: 250px;
  border: 1px solid black;
  background: blanchedalmond;
  padding: 10px;
  margin: 10px;
`

const ButtonStyled = styled.button`
  padding: 10px;
  margin: 5px;
  background: orange;
  border: 1px solid black;
`
