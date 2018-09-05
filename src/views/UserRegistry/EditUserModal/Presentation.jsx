import PropTypes from "prop-types";
import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withStyles from "@material-ui/core/styles/withStyles";
import {Field} from 'redux-form'
import TextField from "../../../containers/ReduxForm/TextField.jsx"

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class Presentation extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    };

    render() {
        const {classes, open, handleClose, handleSubmit, onSubmit, user} = this.props;

        const title = user.id ? "Edit User" : "Add User";

        return <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the user details
                    </DialogContentText>

                    <Field autoFocus margin="dense" id="firstName" label="firstName" fullWidth required={true} name="firstName" component={TextField}/>
                    <Field autoFocus margin="dense" id="lastName" label="lastName" fullWidth required={true} name="lastName" component={TextField}/>
                    <Field autoFocus margin="dense" id="email" label="email" fullWidth required={true} name="email" component={TextField}/>

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button color="primary" type="submit">Submit</Button>
                </DialogActions>
            </form>
        </Dialog>
    }
}

export const EDIT_USER_FORM = 'EDIT_USER_FORM';

export default withStyles(styles)(Presentation);