import MainPage from "./Components/Pages/Main/Main";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Login from "./Components/Pages/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {login, selectUser} from "./Components/Redux/Reducers/MainReducer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


function App() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(() => {
        const user = localStorage.getItem('name')
        dispatch(login(user))
    }, [])


    if(user === undefined) return <div>lOADER</div>

    return <div className={classes.root}>{user ? <MainPage/> : <Login/>}</div>
}

export default App;
