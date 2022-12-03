import React, {useContext, useState} from 'react';
import {Button, Stack, TextField, Typography} from "@mui/material";
import {Context} from "../../Store/Context";

export default function Auth() {

    const {authValid, authorization, login, getName} = useContext(Context)



    return (
        <Stack justifyContent="space-between" padding='20px 40px' boxShadow='0.5rem 0.5rem 5rem 0.5rem #0000004F'>
            <Typography color='#06063f'>Авторизация</Typography>
            <Stack padding='10px 0'>
                <TextField onKeyDown={login} onChange={getName} id="outlined-basic" variant="outlined"
                           label="Введите имя"/>
            </Stack>
            {!authValid ? <Button  disabled  onClick={authorization} variant="contained">Введите имя</Button>
                : <Button  onClick={authorization} variant="contained">Вход</Button>}
        </Stack>
    );
};

