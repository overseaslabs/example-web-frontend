import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";

class Presentation extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    };

    render() {
        const {open, user, handleClose, handleSubmit} = this.props;

        return (
            <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{`User deletion`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You're about to delete {user.name}. Confirm?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">No</Button>
                    <Button onClick={() => handleSubmit(user)} color="primary" autoFocus>Yes</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default Presentation;