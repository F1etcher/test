import React, {useContext} from 'react';
import {AppContext} from "../../../Context";
import User from "./User";
import "../Main/UsersPage.css"


export default function UserPage() {
    const {users} = useContext(AppContext)

    return (
        <div className="UsersPage">
            <h3>Contact</h3>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}

