import {connect} from "react-redux";
import Presentation from "./Presentation.jsx";
import React from "react";
import PropTypes from "prop-types";
import {reduxForm} from 'redux-form'
import {createUser, updateUser} from "../../../actions/ureg/api";
import cryptoRandomString from 'crypto-random-string';
import {closeEditUserModal} from "../../../actions/ureg/ui";
import {EDIT_USER_FORM} from "./Presentation";


const ModalContainer = ({open, handleClose, mode, handleSubmit}) => (
    <Presentation open={open} handleClose={handleClose} handleSubmit={handleSubmit} mode={mode}/>
);


ModalContainer.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};

const validate = values => {
    const errors = {};
    const requiredFields = [
        'name',
        'description'
    ];

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    });

    return errors
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClose: () => {
            dispatch(closeEditUserModal());
        },
        onSubmit: (newUser, oldUser = false, page, size) => {
            dispatch(closeEditUserModal());

            if (oldUser === false) {
                dispatch(createUser(newUser));
            } else {
                dispatch(updateUser(oldUser, newUser));
            }

        }
    }
};

const mapStateToProps = state => {
    //the user that is being edited
    const user = state.form[EDIT_USER_FORM].values || {};

    //the original user
    const oldUser = state.entities.users.content.filter(x => user.id !== undefined && x.id === user.id)[0] || false;

    const {number, size} = state.entities.users;

    return {
        open: state.ui.ureg.modals.editUser.open,
        user,
        oldUser,
        number,
        size
    }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    //update or create user
    onSubmit: (user) => {
        if (user.id === undefined) {
            //create
            user.id = cryptoRandomString(10);
            dispatchProps.onSubmit(user, false, stateProps.number, stateProps.size);
        } else {
            dispatchProps.onSubmit(stateProps.user, stateProps.oldUser);
        }
    }
});

const ReduxForm = reduxForm({
    form: EDIT_USER_FORM,
    validate
})(Presentation);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ReduxForm);