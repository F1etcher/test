import React, {useEffect, useState} from "react";
import UserPage from "./Components/Pages/Main/UserPage";
import AddNewUser from "./Components/Pages/Create/AddNewUser";
import {AppContext} from "./Context";
import "../src/App.css"

const userList = []

function App() {
    const [users, setUsers] = useState(userList)

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem('store'))
        if (store) setUsers(store)
    }, [])

    useEffect(() => {
        localStorage.setItem('store', JSON.stringify(users))
    }, [users])

    const dispatchUserEvent = (actionType, payload) => {
        switch (actionType) {
            case 'ADD_USER':
                setUsers([...users, payload.newUser])
                break;
            case 'REMOVE_USER':
                setUsers(users.filter(user => user.id !== payload.userId))
                break;
            case 'EDIT_USER': {
                let item = users.filter(user => user.id !== payload.user.id)
                setUsers([...item, payload.user])
            }
                break;
            default:
                return;
        }
    }
    return (
        <div className="App">
            <AppContext.Provider value={{users, dispatchUserEvent}}>
                <UserPage/>
                <AddNewUser/>
            </AppContext.Provider>
        </div>
    );
}

export default App
