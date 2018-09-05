import {combineReducers} from 'redux';
import {TOGGLE_EDIT_USER_MODAL, TOGGLE_DELETE_USER_MODAL} from "../actions/ureg/modals";

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

const modals = combineReducers({editUser, deleteUser});

const ureg = combineReducers({modals});

const ui = combineReducers({ureg});

export default ui;