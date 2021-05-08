import React, {useContext, useState} from 'react';
import {AppContext} from "../../../Context";


export default function AddNewUser() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [tel, setTel] = useState('');

    const {dispatchUserEvent} = useContext(AppContext)

    const handleAddUser = () => {
        const user = {id: Math.random(), name, mail, tel}
        dispatchUserEvent('ADD_USER', {newUser: user})
    }

    return (
        <div>
            <h2>Add New User</h2>
            <input value={name} onChange={(e) => setName(e.target.value) } type="text" placeholder="name"/>
            <input value={mail} onChange={(e) => setMail(e.target.value) } type="mail" placeholder="mail"/>
            <input value={tel} onChange={(e) => setTel(e.target.value) } type="tel" placeholder="tel"/>
            <button onClick={handleAddUser}>ADD</button>
        </div>
    );
}
