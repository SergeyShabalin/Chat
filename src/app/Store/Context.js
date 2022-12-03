
import React, {useContext, useRef, useState, useEffect} from "react";


const CONSTANTS = {
    userName: 'userName',
    messages: 'messages',
}
export const Context = React.createContext(null);

export const AppProvider =({children})=>{

    const [allMessages, setAllMessages] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    const [messageValue, setMessageValue] = useState('')
    const [personName, setPersonName] = useState('')
    const [isValidName, setIsValidName] = useState(false)
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
        if (e.keyCode !== 13) return
        e.preventDefault();
        onSendMessage();
    }

    function onChangeMessageValue({target}) {
        setMessageValue(target.value)
    }

    function onClearHistory() {
        localStorage.clear()
        setAllMessages([])
    }

    function onSendMessage() {
        //TODO allmesages вместо лоакалсторейдж
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
        onClearHistory
    }
    return(
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
};

 export const useStore =()=> useContext(Context)