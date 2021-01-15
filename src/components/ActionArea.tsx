import React from 'react';
import DialogForm from "./DialogForm";

interface  ActionAreaProps{
    addTodo: (task: string) => void
}

export default function ActionArea({addTodo} :ActionAreaProps) {

    const [openDialog, setOpenDialog] = React.useState(false);
    const handleClickClose = () => {setOpenDialog(false)}
    const handleClickOpen = () => {setOpenDialog(true)}
    const handleClickAdd = (task :string )=> {
        addTodo(task)
        handleClickClose()
    }

    return (
        <div>
            <DialogForm
                open={openDialog}
                handleClickAdd={handleClickAdd}
                handleClickClose={handleClickClose}
                handleClickOpen={handleClickOpen}/>
        </div>
    )
};

