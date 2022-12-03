import React from 'react';
import {Stack, Typography} from "@mui/material";

import {useStore} from "../../../Store/Context";
import Message from "./Message";

export default function Messages() {
    const {user, allMessages, messageEndRef} = useStore()
    const messages = allMessages.map(message => <Message key={message.time} user={user} {...message}/>)
    return (
        <Stack height='55vh' padding='5px' overflow="auto">
            {messages}
            <Typography ref={messageEndRef}/>
        </Stack>
    )
};



