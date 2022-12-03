import React from 'react';
import {Stack, Typography} from "@mui/material";

export default function  Message ({_id, time, user, text, name}) {

    const hours = new Date(time).toLocaleTimeString()
    console.log(hours)
    const formatedTime = hours.slice(0, -3)
    console.log(formatedTime)
    return (
        <Stack spacing={1}>
            <Typography
                textAlign="left"
                pl='0.5rem'
                color='#06063f'
                fontSize='0.7rem'
            >
                {user === name ? 'Вы' : name}
            </Typography>
            <Stack
                textAlign="left"
                boxShadow='0.1rem 0.2rem 2rem 0.1rem #0000004F'
                borderRadius='15x'
                margin='0.5rem 1rem 0.2rem 0.5rem'
                p='0.8rem'
            >
                {text}
            </Stack>
            <Typography textAlign="right" color='#06063f' fontSize='0.7rem'>{formatedTime}</Typography>
        </Stack>
    )
}