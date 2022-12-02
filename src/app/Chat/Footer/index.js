import React, {useState,useContext} from 'react';
import classes from './Footer.module.css'
import {Button, TextField} from "@mui/material";
import {format} from "date-fns";

import {Context} from "../../Store/Context";


export default function Footer(){


    const {saveName, getValue, inputValue,sendMessage} = useContext(Context)

    return (
        <div className={classes.wrapper}>
            <TextField fullWidth onKeyDown={saveName} id="outlined-basic" label="Напишите сообщение..." variant="outlined" onChange={getValue} value={inputValue} />
            <Button variant="outlined" onClick={sendMessage}>Send</Button>
        </div>
    );
};
