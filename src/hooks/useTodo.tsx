import {useState} from "react";
import {Todo} from "../models/Settings";

const initialState: Todo[] =
    [{
        id: 1,
        title: "do homework",
        status: "OPEN",
    }, {
        id: 2,
        title: "learn typescript",
        status: "IN_PROGRESS",
    }, {
        id: 3,
        title: "drink beer",
        status: "DONE",
    }]


export default function useTodo() {
    const [allTodo, setAllTodo] = useState(initialState);
    const addTodo = (task :string ) => {
        setAllTodo([...allTodo,{id: allTodo.length+1,title:task, status:"OPEN"}])
    }

    const advance = (id:number) => {
        const todoToUpdate =  allTodo.find( todo => todo.id === id)

        if (!todoToUpdate){
            return
        }

        switch (todoToUpdate.status){
            case "OPEN":
                todoToUpdate.status = "IN_PROGRESS"
                break;
            case "IN_PROGRESS":
                todoToUpdate.status = "DONE"
                break;
            case "DONE":
                todoToUpdate.status = "OPEN"
        }

        setAllTodo([...allTodo?.filter(todo => todo.id !== id), todoToUpdate])
    }

    const deleteTodo = (id: number) => {
        setAllTodo(allTodo.filter(todo => todo.id !== id))
    }

    return {allTodo, setAllTodo, addTodo, advance, deleteTodo}

}
