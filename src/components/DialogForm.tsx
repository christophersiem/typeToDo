import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from "styled-components/macro";
import {Todo} from "../models/Settings";

interface DialogFormProps {
    addTodo: (task: string) => void
    open: boolean;
    handleClickClose: () => void;
    handleClickOpen: () => void;
}

export default function DialogForm({addTodo, open, handleClickClose, handleClickOpen}: DialogFormProps) {
    const [task, setTask] = useState('');

    return (
        <div>
            <ButtonStyled onClick={handleClickOpen}>+</ButtonStyled>
            <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new ToDo</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        margin="dense"
                        id="name"
                        label="task"
                        type="task"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => addTodo(task)} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const ButtonStyled = styled.button`
font-size: 36px;
position:fixed;
border: none;
width:60px;
height:60px;
bottom:40px;
right:40px;
background-color:#0C9;
color:#FFF;
border-radius:50px;
text-align:center;
box-shadow: 2px 2px 3px #999;
`
