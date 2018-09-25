/*
 * UI actions
 */

import {resetActiveUser, setActiveUser} from "./forms";

export const TOGGLE_EDIT_USER_MODAL = 'TOGGLE_EDIT_USER_MODAL';
export const TOGGLE_DELETE_USER_MODAL = 'TOGGLE_DELETE_USER_MODAL';
export const TOGGLE_UREG_DRAWER = 'TOGGLE_UREG_DRAWER';
export const SORT_USERS = "SORT_USERS";

/**
 * Open the delete user modal
 * @param user
 * @returns {{type: string, open: boolean, user: *}}
 */
export const openDeleteUserModal = (user) => ({
    type: TOGGLE_DELETE_USER_MODAL,
    open: true,
    user
});

/**
 * Close the delete user modal
 * @returns {{type: string, open: boolean}}
 */
export const closeDeleteUserModal = () => ({
    type: TOGGLE_DELETE_USER_MODAL,
    open: false
});

/**
 * Toggle the delete user modal
 * @param open
 * @returns {{type: string, open: *}}
 */
const switchEditUserModal = (open) => ({
    type: TOGGLE_EDIT_USER_MODAL,
    open
});

/**
 * Close the edit user modal
 * @returns {{type: string, open: *}}
 */
export const closeEditUserModal = () => {
    return switchEditUserModal(false);
};

/**
 * Open the edit user modal
 * @param user
 * @returns {Function}
 */
export const openEditUserModal = (user = null) => dispatch => {
    if (user) {
        //fill the form with the passed user
        dispatch(setActiveUser(user));
    } else {
        //reset the form
        dispatch(resetActiveUser());
    }

    dispatch(switchEditUserModal(true));
};

/**
 * Open or close the user registry drawer
 * @param user
 * @returns {{type: string, open: boolean}}
 */
export const toggleUregDrawer = (user) => ({
    type: TOGGLE_UREG_DRAWER,
    user
});

/**
 * Sort the users list
 * @returns {{type: string}}
 */
export const sortUsers = (orderBy) => ({
    type: SORT_USERS,
    orderBy
});