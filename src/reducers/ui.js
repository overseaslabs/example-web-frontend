/*
 * UI reducers
 */

import {combineReducers} from 'redux';
import {TOGGLE_EDIT_USER_MODAL, TOGGLE_DELETE_USER_MODAL, TOGGLE_UREG_DRAWER, SORT_USERS} from "../actions/ureg/ui";
import {SORT_EMAILS, TOGGLE_EMAIL_DRAWER} from "../actions/mailer/ui";
import {ADD_NOTIFICATION, REMOVE_NOTIFICATION} from "../actions/notifications";

/**
 * Process ordering state
 * @param state
 * @param action
 * @returns {{order: string, orderBy: *}}
 */
const order = (state, action) => {
    const {orderBy} = action;

    let order = 'desc';

    if (state.orderBy === orderBy && state.order === 'desc') {
        order = 'asc';
    }

    return {order, orderBy};
};

const editUser = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_EDIT_USER_MODAL:
            return {
                ...state,
                open: action.open
            };

        default:
            return state;
    }
};

const deleteUser = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_DELETE_USER_MODAL:
            return {
                ...state,
                open: action.open,
                user: action.open === true ? action.user : {}
            };

        default:
            return state;
    }
};

const viewEmail = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_EMAIL_DRAWER:
            return {
                ...state,
                open: action.open,
                email: action.open === true ? action.email : {}
            };

        default:
            return state;
    }
};

const notifications = (state = [], action) => {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return [
                ...state,
                action.notification
            ];

        case REMOVE_NOTIFICATION:
            const notifications = state.filter((x) => x.id !== action.notification.id);

            return [
                ...notifications
            ];

        default:
            return state;
    }
};

const uregDrawer = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_UREG_DRAWER:
            const open = !state.open;

            return {
                ...state,
                open: open,
                user: open ? action.user : {}
            };

        default:
            return state;
    }
};

const emailDrawer = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_EMAIL_DRAWER:
            const open = !state.open;

            return {
                ...state,
                open: open,
                email: open ? action.email : {}
            };

        default:
            return state;
    }
};

/**
 * Users list UI reducer
 * @param state
 * @param action
 * @returns {{order: string, orderBy: *}}
 */
const users = (state = {}, action) => {
    switch (action.type) {
        case SORT_USERS:
            return order(state, action);

        default:
            return state;
    }
};

/**
 * Email list UI reducer
 * @param state
 * @param action
 * @returns {{order: string, orderBy: *}}
 */
const emails = (state = {}, action) => {
    switch (action.type) {
        case SORT_EMAILS:
            return order(state, action);

        default:
            return state;
    }
};

const ureg = combineReducers({modals: combineReducers({editUser, deleteUser}), drawer: uregDrawer, users});

const mailer = combineReducers({modals: combineReducers({viewEmail}), drawer: emailDrawer, emails});

const ui = combineReducers({ureg, mailer, notifications});

export default ui;