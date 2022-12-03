import React from 'react';
import {IconButton, Stack, Typography} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import {useStore} from "../../Store/Context";
import Messages from "./Messages";
import FormControlled from "../FormControlled";

export default function MessageContainer() {

    const {user, setAllMessages, logout} = useStore();

    return (
        <Stack
            bg='#FFFFFF60'
            position='relative'
            boxShadow='0.1rem 0 2rem 0.2rem #00000070'
            p='1rem'
            width='80%'
            borderRadius='10px'
        >
            <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                padding='1rem'
            >
                <Typography color='#0f0f77'>Вы зашли под именем {user} </Typography>
                <IconButton color="primary" onClick={logout}><LogoutIcon/></IconButton>
            </Stack>
            <Messages/>
            <FormControlled setAllArrMessages={setAllMessages}/>
        </Stack>
    );
};
