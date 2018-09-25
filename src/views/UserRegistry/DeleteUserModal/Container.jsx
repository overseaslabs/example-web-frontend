/*
 * Delete user modal container
 */

import connect from "react-redux/es/connect/connect";
import {closeDeleteUserModal} from "../../../actions/ureg/ui";
import {deleteUser} from "../../../actions/ureg/api";
import Presentation from "./Presentation.jsx";

const mapStateToProps = state => {
    const {open, user} = state.ui.ureg.modals.deleteUser;

    const {size, number} = state.entities.users;

    return {open, user, size, number}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    //close the modal
    handleClose: () => {
        dispatch(closeDeleteUserModal());
    },
    //confirm deletion
    handleSubmit: (user, page, size) => {
        dispatch(closeDeleteUserModal());
        dispatch(deleteUser(user));
    },
    dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    handleSubmit: (user) => dispatchProps.handleSubmit(user, stateProps.number, stateProps.size)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Presentation);
