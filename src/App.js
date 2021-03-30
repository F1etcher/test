import MainPage from "./Components/Pages/Main/Main";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import SignIn from "./Components/Pages/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


function App() {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                    <Route exact path="/">
                        <SignIn/>
                    </Route>
                    <Route exact path="/main">
                        <MainPage/>
                    </Route>
            </div>
        </Router>
    );
}

export default App;
