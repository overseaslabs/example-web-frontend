export const RESET_EDITED_USER = "RESET_EDITED_USER";

export const SET_EDITED_USER = "SET_EDITED_USER";

export const resetActiveUser = () => ({
    type: RESET_EDITED_USER
});

export const setActiveUser = (user) => ({
    type: SET_EDITED_USER,
    user
});