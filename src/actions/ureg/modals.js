import {resetActiveUser, setActiveUser} from "./forms";

export const TOGGLE_EDIT_USER_MODAL = 'TOGGLE_EDIT_USER_MODAL';
export const TOGGLE_DELETE_USER_MODAL = 'TOGGLE_DELETE_USER_MODAL';

export const openDeleteUserModal = (user) => ({
    type: TOGGLE_DELETE_USER_MODAL,
    open: true,
    user
});

export const closeDeleteUserModal = () => ({
    type: TOGGLE_DELETE_USER_MODAL,
    open: false
});

const switchEditUserModal = (open) => ({
    type: TOGGLE_EDIT_USER_MODAL,
    open
});

export const closeEditUserModal = () => {
    return switchEditUserModal(false);
};

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