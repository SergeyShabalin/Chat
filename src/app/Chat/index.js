import React from 'react';
import {Stack} from "@mui/material";

import MessageContainer from "./MessageContainer";
import Auth from "./Auth";
import {useStore} from "../Store/Context";

export default function Chat() {

    const {isAuth} = useStore();
    return (
        <Stack flexDirection="row" justifyContent="center" alignItems="center" height='100vh'>
            {isAuth ? <MessageContainer/> : <Auth/>   }
        </Stack>
    );
};
