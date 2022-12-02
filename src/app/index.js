import React,{useState} from "react";
import classes from './App.module.css'
import './App.module.css';
import Chat from "./Chat";
import {Context} from "./Store/Context";
import MessageContainer from "./Chat/MessageContainer";
import Store from "./Store";


export default function App() {

     const {allMessages, setAllMessages, isAuth, setIsAuth, saveName, getValue, inputValue,sendMessage, setPersonName, authorization, logout} = Store()

    return (
        <Context.Provider value={{allMessages, setAllMessages, isAuth, setIsAuth,saveName, getValue, inputValue,sendMessage,setPersonName, authorization,logout }}>
        <div className={classes.app_wrapper}>
            <Chat/>
        </div>
        </Context.Provider>
    );
}


