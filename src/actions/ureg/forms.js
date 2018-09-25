/*
 * Form actions
 */

export const RESET_EDITED_USER = "RESET_EDITED_USER";

export const SET_EDITED_USER = "SET_EDITED_USER";

/**
 * Reset the user which is being edited
 * @returns {{type: string}}
 */
export const resetActiveUser = () => ({
    type: RESET_EDITED_USER
});

/**
 * Set the user for editing
 * @param user
 * @returns {{type: string, user: *}}
 */
export const setActiveUser = (user) => ({
    type: SET_EDITED_USER,
    user
});