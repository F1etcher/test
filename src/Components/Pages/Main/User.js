import React, {useContext, useState} from 'react';
import {AppContext} from "../../../Context";
import "../Main/User.css"

function User({user}) {
    const {dispatchUserEvent} = useContext(AppContext)
    const [onEdit, setEdit] = useState(false)
    const [editValue, setEditValue] = useState(user)

    const handleRemoveUser = () => {
        dispatchUserEvent('REMOVE_USER', {userId: user.id})
    }
    const changeValue = (name) => (e) => {
        setEditValue((state) => ({...state, [name]: e.target.value}));
    }
    const handleEditSave = (e) => {
        e.preventDefault();
        const value = {...editValue}
        dispatchUserEvent('EDIT_USER', {user: value})
        setEdit(false)
    }
    const handleEditUser = () => {
        setEdit(true)
    }
    if (onEdit) {
        return (
            <div>
                <form autoComplete="off" onSubmit={handleEditSave}>
                    <input value={editValue.name} onChange={changeValue("name")} type="text" placeholder="Name"/>
                    <input value={editValue.mail} onChange={changeValue("mail")} type="mail" placeholder="Mail@"/>
                    <input value={editValue.tel} onChange={changeValue("tel")} type="tel" placeholder="Number"/>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="User" style={{border: "1px solid gray", display: "inline-block", padding: "10px "}}>
                <div>
                    <img alt={"error"} width="20px" height="20px" src={user.avatar}/>
                </div>
                <h2>{user.name}</h2>
                <h4>{user.mail}</h4>
                <h4>{user.tel}</h4>
                <button onClick={handleRemoveUser}>Delete</button>
                <button onClick={handleEditUser}>Edit</button>
            </div>
        )
    }
}

export default User;