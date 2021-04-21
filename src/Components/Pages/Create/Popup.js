import React from 'react';
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";

function Popup(props) {
    const {title, children, openPopup, setOpenPopup} = props;
    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>title goes here.</div>
            </DialogTitle>
            <DialogContent>
                <div>content goes here.</div>
            </DialogContent>
        </Dialog>
    );
}

export default Popup;