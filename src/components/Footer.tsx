import React, {useState} from 'react';
import DialogForm from "./DialogForm";
import {Todo} from "../models/Settings";

interface FooterProps {
    allTodo: Todo[]
    setAllTodo: (todos: Todo[]) => void
}

export default function Footer({allTodo,setAllTodo} : FooterProps) {

    const [openDialog, setOpenDialog] = React.useState(false);
    const handleClickClose = () => {setOpenDialog(false)}
    const handleClickOpen = () => {setOpenDialog(true)}
    const addTodo = (task :string )=> {
        setAllTodo([...allTodo,{title:task, status:"OPEN"}])
        handleClickClose()
    }

    return (
        <div>
            <DialogForm open={openDialog} addTodo={addTodo} handleClickClose={handleClickClose} handleClickOpen={handleClickOpen}/>
        </div>
    )
};

