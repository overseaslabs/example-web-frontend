/*
 * Entity list actions
 */

export const REPLACE_USER = "REPLACE_USER";

export const ADD_USER = "ADD_USER";

export const REMOVE_USER = "REMOVE_USER";

export const INSERT_USERS = 'INSERT_USERS';

/**
 * Add the user into the list
 * @param user
 * @returns {{type: string, user: *}}
 */
export const addUser = (user) => ({
    type: ADD_USER,
    user
});

/**
 * Remove the user from the list
 * @param user
 * @returns {{type: string, user: *}}
 */
export const removeUser = (user) => ({
    type: REMOVE_USER,
    user
});

/**
 * Replace the user in the list
 * @param user
 * @param replaceWith
 * @returns {{type: string, user: *, replaceWith: boolean}}
 */
export const replaceUser = (user, replaceWith = false) => ({
    type: REPLACE_USER,
    user,
    replaceWith
});

/**
 * Batch user insert
 * @param users
 * @returns {{type: string, users: *}}
 */
export const insertUsers = (users) => ({
    type: INSERT_USERS,
    users
});