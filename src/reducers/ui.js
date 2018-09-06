import {combineReducers} from 'redux';
import {TOGGLE_EDIT_USER_MODAL, TOGGLE_DELETE_USER_MODAL} from "../actions/ureg/modals";
import {TOGGLE_VIEW_EMAIL_MODAL} from "../actions/mailer/modals";

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
        case TOGGLE_VIEW_EMAIL_MODAL:
            return {
                ...state,
                open: action.open,
                email: action.open === true ? action.email : {}
            };

        default:
            return state;
    }
};


const ureg = combineReducers({modals: combineReducers({editUser, deleteUser})});

const mailer = combineReducers({modals: combineReducers({viewEmail})});

const ui = combineReducers({ureg, mailer});

export default ui;