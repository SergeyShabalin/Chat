import React, {useContext, useRef, useState, useEffect} from "react";

const CONSTANTS = {
    userName: 'userName',
    messages: 'messages',
}
export const Context = React.createContext(null);

export const AppProvider = ({children}) => {

    const [allMessages, setAllMessages] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    const [messageValue, setMessageValue] = useState('')
    const [personName, setPersonName] = useState('')
    const [isValidName, setIsValidName] = useState(false)
    const [isValidMessage, setIsValidMessage] = useState(false)
    const user = sessionStorage.getItem(CONSTANTS.userName)
    const messageEndRef = useRef()

    useEffect(() => {
        messageEndRef.current?.scrollIntoView()
    }, [allMessages])

    useEffect(() => {
        function getStoragePersonName() {
            if (!user) return
            setPersonName(user)
            setIsAuth(true)
        }

        getStoragePersonName()

        getAllMessages()
        window.addEventListener('storage', getAllMessages)
        return () => window.removeEventListener('storage', getAllMessages)
    }, [])

    useEffect(() => {
        if (personName) setIsValidName(true)
        else setIsValidName(false)
    }, [personName])

    function getAllMessages() {
        const data = localStorage.getItem(CONSTANTS.messages) || "[]"
        const messages = JSON.parse(data)
        setAllMessages(messages)
    }

    function onEnterSendMessage(e) {
        if (e.keyCode !== 13 || !isValidMessage) return
        e.preventDefault();
        onSendMessage();
    }

    function onChangeMessageValue({target}) {
        setMessageValue(target.value)
        if (target.value !== '') setIsValidMessage(true)
        else setIsValidMessage(false)
    }

    function onClearHistory() {
        localStorage.clear()
        setAllMessages([])
    }

    function onSendMessage() {
        const messages = JSON.parse(localStorage.getItem(CONSTANTS.messages)) || []
        const messageTime = new Date()
        const newMessage = {
            text: messageValue,
            name: personName,
            time: messageTime
        }
        const allMessages = [...messages, newMessage]
        setAllMessages(allMessages)
        localStorage.setItem(CONSTANTS.messages, JSON.stringify(allMessages))
        setMessageValue('')
        setIsValidMessage(false)
    }

    function login(e) {
        if (e.keyCode !== 13 || !isValidName) return
        e.preventDefault();
        authorization();
    }

    function authorization() {
        sessionStorage.setItem(CONSTANTS.userName, personName)
        setIsAuth(true)
    }

    function logout() {
        sessionStorage.clear()
        setIsAuth(false)
        setIsValidName(false)
    }

    function onChangeName({target}) {
        setPersonName(target.value)
    }

    const store = {
        isAuth,
        allMessages,
        onEnterSendMessage,
        onChangeMessageValue,
        messageValue,
        onSendMessage,
        authorization,
        logout,
        login,
        isValidName,
        onChangeName,
        messageEndRef,
        user,
        onClearHistory,
        isValidMessage
    }
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
};

export const useStore = () => useContext(Context)