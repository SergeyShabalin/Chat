import React, {useState, useEffect} from 'react';
import {format} from "date-fns";

export default function Store() {
    const [allMessages, setAllMessages] = useState([])
    const [isAuth, setIsAuth] = useState(true)
    const [inputValue, setInputValue] = useState('')
    const [personName, setPersonName] = useState()

    useEffect(() => {
        const name = sessionStorage.getItem('userName')
        if (name) setIsAuth(false)
    }, [])


    function getAllMessages() {
        const data = localStorage.getItem('messages')
        if (data) {
            const messages = JSON.parse(data || [])
            setAllMessages(messages)
        }
    }

    useEffect(() => {
        getAllMessages()
        window.addEventListener('storage', getAllMessages)
        return () => window.removeEventListener('storage', getAllMessages)
        const elem = document.getElementById('container');
        window.scrollTo(0, document.body.scrollHeight)
    }, [])

    function saveName(e){
        if (e.keyCode === 13) {
            e.preventDefault()
            console.log('нажали ентер')
            sendMessage();
        }
    }

    //TODO нет функции авторизации

    function getValue({target}){
        setInputValue(target.value)
    }

    function sendMessage(){
        const user = sessionStorage.getItem('userName') || ''
        const messages = JSON.parse(localStorage.getItem('messages')) || []
        const messageTime = format(new Date(), 'p')
        const newMessage = {
            _id: format(new Date(), 'T'),
            text: inputValue,
            name: user,
            time: messageTime
        }
        const allMessages = [...messages, newMessage]
        setAllMessages(allMessages)
        localStorage.setItem('messages', JSON.stringify(allMessages))
        setInputValue('')
    }



    function authorization() {
        sessionStorage.setItem('userName', personName)
        setIsAuth(false)
    }

    function logout() {
        sessionStorage.clear()
        setIsAuth(true)
    }

    return {
        isAuth,
        setIsAuth,
        allMessages,
        setAllMessages,
        saveName,
        getValue,
        inputValue,
        sendMessage,
        setPersonName,
        authorization,
        logout
    };
};


