import React, {useContext} from 'react';
import classes from './MessageContainer.module.css'
import Footer from "../Footer";
import {BiLogOut} from "react-icons/bi";
import {Context} from "../../Store/Context";

export default function MessageContainer() {

    const {allMessages, setAllMessages, logout} = useContext(Context)

    const messages = allMessages.map(message => (<div key={message._id}>
        <span className={classes.name_user}>{message.name}</span>
        <span className={classes.message}>{message.text}</span>
        <span className={classes.date}>{message.time}</span>
    </div>))

    const user = sessionStorage.getItem('userName')

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <span>Вы зашли под именем {user}  </span>
                <div className={classes.logout} onClick={logout}><BiLogOut/></div>
            </div>
            <div id='container' className={classes.message_container}>{messages}</div>
            <Footer setAllArrMessages={setAllMessages}/>
        </div>
    );
};

