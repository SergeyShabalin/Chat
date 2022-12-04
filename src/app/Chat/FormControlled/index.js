import React from 'react';
import {Button, Stack, TextField} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';

import {useStore} from "../../Store/Context";

export default function FormControlled() {

    const {
        onEnterSendMessage,
        onChangeMessageValue,
        messageValue,
        onSendMessage,
        onClearHistory,
        isValidMessage
    } = useStore()

    return (
        <Stack padding="1rem 0 0 0">
            <TextField
                multiline
                onKeyDown={onEnterSendMessage}
                label="Напишите сообщение..."
                onChange={onChangeMessageValue}
                value={messageValue}
            />
            <Stack flexDirection="row">
                <Button variant="outlined" color="error" onClick={onClearHistory} startIcon={<DeleteForeverIcon/>}>
                    Clear history
                </Button>
                <Button
                    disabled={!isValidMessage}
                    fullWidth
                    variant="outlined"
                    onClick={onSendMessage}
                    endIcon={<SendIcon/>}
                >
                    Send
                </Button>
            </Stack>
        </Stack>
    );
};
