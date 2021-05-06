import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {GridList, GridListTile, GridListTileBar, IconButton} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    img: {
        width: '100%'
    },

}));

function InfoIcon() {
    return null;
}

export default function GridListItem() {
    const classes = useStyles();
    return (

        <GridListTile>
            <img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                 alt="error"/>
            <GridListTileBar
                title="Name"
                subtitle={0}
                actionIcon={
                    <IconButton className={classes.icon}>
                        <InfoIcon/>
                    </IconButton>
                }
            />
        </GridListTile>

    );
}