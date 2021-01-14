import React from 'react';
import {Status, Todo} from "../models/Settings";
import SingleToDo from "../components/Todo";

interface TodoListProps {
    todos: Todo[]
}

export default function TodoList({todos}: TodoListProps) {

    const filterTodos = (status: Status) => {
        return todos.filter(todo => todo.status === status)
    }

    return(
        filterTodos("OPEN").map(todo => (
            <SingleToDo todo={todo}/>))
        )

};
