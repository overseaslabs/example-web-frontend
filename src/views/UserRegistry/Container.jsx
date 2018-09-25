/*
 * User registry container
 */

import Marketing from "./Presentation.jsx";
import {connect} from "react-redux";
import React from "react";
import {fetchUsers} from "../../actions/ureg/api";
import {
    openEditUserModal,
    openDeleteUserModal,
    sortUsers
} from "../../actions/ureg/ui";
import PropTypes from "prop-types";
import {toggleUregDrawer} from "../../actions/ureg/ui";
import SortingHelper from "../../services/SortingHelper";

class Container extends React.Component {
    static propTypes = {
        users: PropTypes.object.isRequired,
        handleAddUser: PropTypes.func.isRequired,
        handleEditUser: PropTypes.func.isRequired
    };

    componentDidMount() {
        //fetch users
        const {dispatch} = this.props;
        dispatch(fetchUsers());
    };

    render() {
        //sort the users list
        let {users, order, orderBy} = this.props;
        users.content = SortingHelper.stableSort(users.content, SortingHelper.getSorting(order, orderBy));

        return <Marketing users={users} order={order} orderBy={orderBy} {...this.props}/>
    }
}

const mapStateToProps = (state, ownProps) => {
    //users
    const {users} = state.entities;

    //drawer state
    const drawerOpen = state.ui.ureg.drawer.open;
    const drawerUser = state.ui.ureg.drawer.user;
    const drawerAnchor = state.ui.ureg.drawer.anchor;

    //sorting state
    const {order, orderBy} = state.ui.ureg.users;

    return {users, drawerOpen, drawerUser, drawerAnchor, order, orderBy};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //open the add user modal
        handleAddUser: () => {
            dispatch(openEditUserModal());
        },
        //open the add user modal in the edit mode
        handleEditUser: (user) => {
            dispatch(openEditUserModal(user));
        },
        //open a confirmation delete user modal
        handleDeleteUser: (user) => {
            dispatch(openDeleteUserModal(user));
        },
        //pagination handling
        handleChangePage: (size, page) => {
            dispatch(fetchUsers(page, size));
        },
        onChangeRowsPerPage: (size, page) => {
            dispatch(fetchUsers(page, size));
        },
        //open/close the drawer
        toggleDrawer: (user) => dispatch(toggleUregDrawer(user)),
        //change the sorting
        handleSort: (rowId) => dispatch(sortUsers(rowId)),
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