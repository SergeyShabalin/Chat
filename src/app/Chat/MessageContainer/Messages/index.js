import React, {useContext} from 'react';
import {Stack, Typography} from "@mui/material";
import {Context} from "../../../Store/Context";
import {format} from "date-fns";

export default function Messages() {
    const {allMessages} = useContext(Context)

    const messages = allMessages.map(message => {
        let id = format(new Date(message._id), 'T')
        let time = format(new Date(message.time), 'p')
        return(
                <Stack
                    key={id} spacing={1}>
                    <Typography textAlign="left" pl='0.5rem' color='#06063f' fontSize='0.7rem'>{message.name}</Typography>
                    <Stack textAlign="left" boxShadow='0.1rem 0.1rem 1rem 0.1rem #0000004F' borderRadius='15x'
                           margin='0.5rem 1rem 0.2rem 0.5rem'
                           padding='0.8rem'>
                        {message.text}
                    </Stack>
                    <Typography textAlign="right" color='#06063f' fontSize='0.7rem'>{time}</Typography>
                </Stack>
            )
    })
    return (
        <Stack maxHeight='75%' padding='5px' overflow="auto">{messages}</Stack>
    )
};

