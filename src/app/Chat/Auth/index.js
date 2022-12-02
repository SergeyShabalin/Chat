import React, {useContext, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {Context} from "../../Store/Context";

export default function  Auth ( ){

    const {setPersonName, authorization, saveName} = useContext(Context)

    function getName({target}){
        setPersonName(target.value)
    }

    return (
        <div>
            <TextField onKeyDown={saveName} onChange={getName} id="standard-basic" label="Введите имя" variant="standard" />
            <Button onClick ={authorization} variant="contained">Contained</Button>
        </div>
    );
};

