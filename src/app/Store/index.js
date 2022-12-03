import React, {useState, useEffect, useRef} from 'react';

export default function Store() {
    const [allMessages, setAllMessages] = useState([])
    const [isAuth, setIsAuth] = useState(true)
    const [inputValue, setInputValue] = useState('')
    const [personName, setPersonName] = useState()
    const [authValid, setAuthValid] = useState(false)
    const messageEndRef = useRef()

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

    useEffect(()=>{
        messageEndRef.current?.scrollIntoView()
    }, [allMessages])


    useEffect(() => {
        getAllMessages()
        window.addEventListener('storage', getAllMessages)
        return () => window.removeEventListener('storage', getAllMessages)
    }, [])

    function saveName(e) {
        if (e.keyCode === 13) {
            e.preventDefault()
            sendMessage();
        }
    }

    function login(e) {
        if (e.keyCode === 13) {
            if (authValid) {
                e.preventDefault()
                authorization();
            }
        }
    }

    function getValue({target}) {
        setInputValue(target.value)
    }

    function sendMessage() {
        const user = sessionStorage.getItem('userName') || ''
        const messages = JSON.parse(localStorage.getItem('messages')) || []
        const messageTime = new Date()
        const newMessage = {
            _id: messageTime,
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
        setAuthValid(false)
    }

    function getName({target}) {
        if (target.value !== '') {
            setAuthValid(true)
        } else setAuthValid(false)
        setPersonName(target.value)
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
        logout,
        login,
        setAuthValid,
        authValid,
        getName,
        messageEndRef
    };
};
