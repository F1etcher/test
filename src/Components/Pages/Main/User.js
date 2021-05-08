import React, {useContext} from 'react';
import {AppContext} from "../../../Context";

function User({user}) {

    const {dispatchUserEvent} = useContext(AppContext)
    const handleRemoveUser = () => {
        dispatchUserEvent('REMOVE_USER', {userId: user.id})
    }

    return (
        <div style={{border: "1px solid gray", display: "inline-block", padding: "10px "}}>
            <h2>{user.name}</h2>
            <h4>{user.mail}</h4>
            <h4>{user.tel}</h4>
            <h4>{user.id}</h4>
            <button onClick={handleRemoveUser}>Delete</button>
        </div>
    );
}

export default User;