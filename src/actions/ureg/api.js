import {replaceUser, removeUser, addUser, insertUsers} from "./list";
import {PaginatedEntityContainer} from "../../store";
import CircularJSON from 'circular-json';
import {addNotification} from "../notifications";
import ErrorIcon from "@material-ui/icons/Error";


export const fetchUsers = (page = 0, rowsPerPage = PaginatedEntityContainer.ROWS_PER_PAGE) => async dispatch => {
    const response = await fetch(`/ureg/users?page=${page}&size=${rowsPerPage}`);

    if (response.status !== 200) {
        throw new Error("Couldn't fetch the users");
    }

    const users = await response.json();

    dispatch(insertUsers(users));
};

export const createUser = (user, page = 0, rowsPerPage = PaginatedEntityContainer.ROWS_PER_PAGE) => async dispatch => {
    dispatch(addUser(user));

    try {
        const u = {...user};
        delete u.id;

        const response = await fetch('/ureg/users', {
            method: 'POST',
            body: CircularJSON.stringify(u),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.status === 409) {
            const text = await response.text();
            throw new Error(text);

        } else if (response.status !== 200) {
            throw new Error('Something went wrong when creating the user');

        } else {
            const createdUser = await response.json();

            //by replacing the user in the list we update the temp ID to the real ID
            dispatch(replaceUser(user, createdUser));

            //reload the list
            dispatch(fetchUsers(page, rowsPerPage));
        }
    } catch (e) {
        //error - rollback the user in the state
        dispatch(removeUser(user));
        dispatch(addNotification(e.toString(), "danger", ErrorIcon));
    }
};

export const updateUser = (oldUser, newUser) => async (dispatch) => {
    //update the state with the new user
    dispatch(replaceUser(newUser));

    try {
        //update the backend
        let response = await fetch(`/ureg/users/${newUser.id}`, {
            method: 'PUT',
            body: CircularJSON.stringify(newUser),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.status === 409) {
            const text = await response.text();
            throw new Error(text);

        } else if (response.status !== 200) {
            throw new Error('Something went wrong when updating the user');
        }

        //done - the state already contains the updated user
    } catch (e) {
        //error - rollback the user in the state
        dispatch(replaceUser(oldUser));
        dispatch(addNotification(e.toString(), "danger", ErrorIcon));
    }
};

export const deleteUser = (user, page = 0, rowsPerPage = PaginatedEntityContainer.ROWS_PER_PAGE) => async dispatch => {
    //Remove the user from the list
    dispatch(removeUser(user));

    //Make a remove API call
    //Reload the users list if an error happens
    try {
        const response = await fetch(`/ureg/users/${user.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });

        if (![200, 201].includes(response.status)) {
            //something went wrong when deleting, reload the list
            throw new Error('Something went wrong when deleting the user');
        }
    } catch (e) {
        addNotification(e, "danger", ErrorIcon);
    } finally {
        dispatch(fetchUsers(page, rowsPerPage));
    }
};