import React, {useContext} from 'react';
import { IconButton, Stack, Typography} from "@mui/material";
import {BiLogOut} from "react-icons/bi";
import {Context} from "../../Store/Context";
import Footer from "../Footer";
import Messages from "./Messages";

export default function MessageContainer() {

    const {setAllMessages, logout} = useContext(Context)
    const user = sessionStorage.getItem('userName')

    return (
        <Stack bg='#FFFFFF60' position='relative' boxShadow='0.1rem 0 2rem 0.2rem #00000070' padding='1rem' width='80%'
               borderRadius='10px' height='70%'>
            <Stack flexDirection="row" justifyContent="space-between" padding='1rem' color='#0f0f77'>
                <Typography>Вы зашли под именем {user} </Typography>
                <IconButton aria-label="delete" color="primary" onClick={logout}><BiLogOut/></IconButton>
            </Stack>
            <Messages/>
            <Footer setAllArrMessages={setAllMessages}/>
        </Stack>
    );
};

