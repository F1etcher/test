import React, {useContext, useState} from 'react';
import {AppContext} from "../../../Context";
import  "../Create/AddnewUser.css"

const init = {
    name: "",
    mail: "",
    tel: "",
    avatar: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
}

export default function AddNewUser() {
    const {dispatchUserEvent} = useContext(AppContext)
    const [state, setState] = useState(init);

    const handleAddUser = (e) => {
        e.preventDefault();
        const user = {id: Math.random(), ...state}
        dispatchUserEvent('ADD_USER', {newUser: user})
        setState(init)
    }

    const changeInput = (name) => (e) => {
        setState((state) => ({...state, [name]: e.target.value}));
    };

    return (
        <div className="AddNew">
            <form autoComplete="off" onSubmit={handleAddUser}>
                <h2>Add New User</h2>
                <input value={state.name} onChange={changeInput("name")} type="text" placeholder="Name"/>
                <input value={state.mail} onChange={changeInput("mail")} type="mail" placeholder="Mail@"/>
                <input value={state.tel} onChange={changeInput("tel")} type="tel" placeholder="Number"/>
                <button type="submit">ADD</button>
            </form>
        </div>
    );
}
