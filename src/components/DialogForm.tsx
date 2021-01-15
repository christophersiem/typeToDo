import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from "styled-components/macro";


interface DialogFormProps {
    handleClickAdd: (task: string) => void
    open: boolean;
    handleClickClose: () => void;
    handleClickOpen: () => void;
}

export default function DialogForm({handleClickAdd, open, handleClickClose, handleClickOpen}: DialogFormProps) {
    const [task, setTask] = useState('');

    const onClickAdd = () => {
        handleClickAdd(task)
        setTask('')
    }
    const onClickCancel = () => {
        handleClickClose()
        setTask('')
    }

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
                        id="description"
                        label="description"
                        type="description"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClickCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onClickAdd} color="primary">
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
top:40px;
right:40px;
background-color:#0C9;
color:#FFF;
border-radius:50px;
text-align:center;
box-shadow: 2px 2px 3px #999;
`
