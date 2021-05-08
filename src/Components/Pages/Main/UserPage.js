import React, {useContext} from 'react';
import {AppContext} from "../../../Context";
import User from "./User";


export default function UserPage() {

const {users} = useContext(AppContext)


    return(
        <div>
            <h3>Contact</h3>
            { users.map( user =>  <User key={user.id} user={user}/>)}
        </div>
    )
}

