import React, {  useContext} from 'react';
import classes from './Chat.module.css'
import MessageContainer from "./MessageContainer";
import Auth from "./Auth";
import {Context} from "../Store/Context";


export default function Chat() {

    // const [personName, setPersonName] = useState()

    const {isAuth} = useContext(Context)

    return (
        <div className={classes.chat_wrapper}>
            {isAuth ? <Auth/>
                : <MessageContainer/>}
        </div>
    );
};

