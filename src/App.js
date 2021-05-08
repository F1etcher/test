import React, {useState} from "react";
import UserPage from "./Components/Pages/Main/UserPage";
import AddNewUser from "./Components/Pages/Create/AddNewUser";
import {AppContext} from "./Context";

const userList = [
    {
        id: null,
        name: "",
        mail: "",
        tel: null,
    }]

function App() {
    const [users, setUsers] = useState(userList)

    const dispatchUserEvent = (actionType, payload) => {
        switch (actionType) {
            case 'ADD_USER':
                setUsers([...users, payload.newUser])
                return;
            case 'REMOVE_USER':
                setUsers(users.filter(user => user.id !== payload.userId))
                return;
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
