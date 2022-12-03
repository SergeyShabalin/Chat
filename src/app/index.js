import React, {useState} from "react";
import classes from './App.module.css'
import './App.module.css';
import Chat from "./Chat";
import {Context} from "./Store/Context";
import Store from "./Store";


export default function App() {

    const store = Store()
    return (
        <Context.Provider value={store}>
            <div className={classes.app_wrapper}>
                <Chat/>
            </div>
        </Context.Provider>
    );
}


