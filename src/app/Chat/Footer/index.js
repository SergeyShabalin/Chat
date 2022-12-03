import React, {useContext} from 'react';
import {Button, Stack, TextField} from "@mui/material";
import {Context} from "../../Store/Context";

export default function Footer(){

    const {saveName, getValue, inputValue,sendMessage} = useContext(Context)

    return (
        <Stack padding='1rem 0'>
            <TextField multiline fullWidth onKeyDown={saveName} id="outlined-basic" label="Напишите сообщение..." variant="outlined" onChange={getValue} value={inputValue} />
            <Button variant="outlined" onClick={sendMessage}>Send</Button>
        </Stack>
    );
};
