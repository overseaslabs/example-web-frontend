import Marketing from "./Presentation.jsx";
import {connect} from "react-redux";
import React from "react";
import {deleteUser, fetchUsers} from "../../actions/ureg/api";
import {
    openEditUserModal,
    openDeleteUserModal,
    closeDeleteUserModal
} from "../../actions/ureg/ui";
import PropTypes from "prop-types";
import {toggleUregDrawer} from "../../actions/ureg/ui";

class Container extends React.Component {
    static propTypes = {
        users: PropTypes.object.isRequired,
        handleAddUser: PropTypes.func.isRequired,
        handleEditUser: PropTypes.func.isRequired
    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchUsers());
    };

    render() {
        return <Marketing {...this.props}/>
    }
}

const mapStateToProps = (state, ownProps) => {
    const {users} = state.entities;

    const drawerOpen = state.ui.ureg.drawer.open;
    const drawerUser = state.ui.ureg.drawer.user;
    const drawerAnchor = state.ui.ureg.drawer.anchor;

    return {users, drawerOpen, drawerUser, drawerAnchor};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleAddUser: () => {
            dispatch(openEditUserModal());
        },
        handleEditUser: (user) => {
            dispatch(openEditUserModal(user));
        },
        handleDeleteUser: (user) => {
            dispatch(openDeleteUserModal(user));
        },
        handleChangePage: (size, page) => {
            dispatch(fetchUsers(page, size));
        },
        onChangeRowsPerPage: (size, page) => {
            dispatch(fetchUsers(page, size));
        },
        toggleDrawer: (user) => dispatch(toggleUregDrawer(user)),
        dispatch
    }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onChangeRowsPerPage: (event) => dispatchProps.onChangeRowsPerPage(event.target.value, stateProps.users.number),
    handleChangePage: (event, page) => dispatchProps.handleChangePage(stateProps.users.size, page),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Container);