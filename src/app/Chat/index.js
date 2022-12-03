import React, {useContext} from 'react';
import MessageContainer from "./MessageContainer";
import Auth from "./Auth";
import {Context} from "../Store/Context";
import {Stack} from "@mui/material";

export default function Chat() {

    const {isAuth} = useContext(Context)

    return (
        <Stack flexDirection="row" justifyContent="center" alignItems="center" height='100vh'>
            {isAuth ? <Auth/>
                : <MessageContainer/>
            }
        </Stack>
    );
};
