import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../Redux/Reducers/MainReducer";
import Popup from "../Create/Popup";

const useStyles = makeStyles((theme) => ({

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

}));


export default function MainPage() {
    const [openPopup, setOpenPopup] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const classes = useStyles();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
        localStorage.clear()
    }

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
                    Loggout
                </Button>
            </AppBar>
            <main>
                <Popup
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                />
                <button onClick={setOpenPopup}>add</button>
            </main>
        </>
    );
}
