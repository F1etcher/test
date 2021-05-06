import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../Redux/Reducers/MainReducer";

import {Grid, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));


export default function MainPage() {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const classes = useStyles();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
        localStorage.clear()
    }

    const list = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Welcome {user}
                    </Typography>
                </Toolbar>
                <Button size="small" color="secondary" onClick={(e) => handleLogout(e)}>
                    Logout
                </Button>
            </AppBar>
            <main>
                <div className={classes.root}>
                    {list.map(i =>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <Paper className={classes.paper}>{i.list}</Paper>
                            </Grid>
                        </Grid>
                    )}
                </div>
            </main>
        </>
    );
}
