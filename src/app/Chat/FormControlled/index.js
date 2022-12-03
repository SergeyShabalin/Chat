import React from 'react';
import {Button, Stack, TextField} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';


import {useStore} from "../../Store/Context";


export default function FormControlled() {

    //TODO icons
    const {saveName, getValue, inputValue, sendMessage, clearHistory} = useStore()

    return (
        <Stack padding="1rem 0">
            <TextField
                multiline
                onKeyDown={saveName}
                label="Напишите сообщение..."
                onChange={getValue}
                value={inputValue}
            />
            <Stack flexDirection="row">
                <Button variant="outlined" color="error" onClick={clearHistory} startIcon={<DeleteForeverIcon/>}>
                    Clear history
                </Button>
                <Button fullWidth variant="outlined" onClick={sendMessage} endIcon={<SendIcon/>}>Send</Button>
            </Stack>
        </Stack>
    );
};
