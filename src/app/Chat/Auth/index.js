import React from 'react';
import {Button, Stack, TextField, Typography} from "@mui/material";
import {useStore} from "../../Store/Context";

export default function Auth() {

    const {isValidName, authorization, login, onChangeName, personName} = useStore()

    return (
        <Stack
            justifyContent="space-between"
            padding='2rem 4rem'
            boxShadow='0.5rem 0.5rem 5rem 0.5rem #0000004F'
        >
            <Typography color='#06063f'>Авторизация</Typography>
            <Stack padding='1rem 0'>
                <TextField
                    autoComplete='off'
                    onKeyDown={login}
                    onChange={onChangeName}
                    variant="outlined"
                    label="Введите имя"
                    value={personName}
                />
            </Stack>
            <Button disabled={!isValidName} onClick={authorization} variant="contained">Вход</Button>
        </Stack>
    );
};
