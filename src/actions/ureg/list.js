export const REPLACE_USER = "REPLACE_USER";

export const ADD_USER = "ADD_USER";

export const REMOVE_USER = "REMOVE_USER";

export const INSERT_USERS = 'INSERT_USERS';

export const addUser = (user) => ({
    type: ADD_USER,
    user
});

export const removeUser = (user) => ({
    type: REMOVE_USER,
    user
});

export const replaceUser = (user, replaceWith = false) => ({
    type: REPLACE_USER,
    user,
    replaceWith
});

export const insertUsers = (users) => ({
    type: INSERT_USERS,
    users
});