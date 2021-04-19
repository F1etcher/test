import MainPage from "./Components/Pages/Main/Main";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Login from "./Components/Pages/Login/Login";
import {useSelector} from "react-redux";
import {selectUser} from "./Components/Redux/Reducers/MainReducer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


function App() {
    const classes = useStyles();
    const user = useSelector(selectUser)

    return <div className={classes.root}>{user ? <MainPage/> : <Login/>}</div>
}

export default App;
