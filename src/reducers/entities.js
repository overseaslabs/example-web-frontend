import {combineReducers} from 'redux';
import {INSERT_USERS} from "../actions/ureg/list";
import {REMOVE_USER, REPLACE_USER, ADD_USER} from "../actions/ureg/list";
import {INSERT_EMAILS} from "../actions/mailer/list";

const users = (state = {}, action) => {
    switch (action.type) {
        case INSERT_USERS:
            //Replace the users in the state
            return {
                ...action.users,
            };

        case REMOVE_USER:
            //Remove the user from the state
            let users = {
                ...state
            };

            users.content.splice(users.content.findIndex((user) => user.id === action.user.id), 1);
            users.totalElements--;

            return users;

        case REPLACE_USER: {
            //replace the user in the list

            let users = {
                ...state
            };

            //the idx of the user to replace
            const idx = users.content.findIndex(x => x.id === action.user.id);

            if (idx === -1) {
                throw new Error(`Couldn't replace the user #${action.user.id}, it's missing in the state`);
            }

            users.content[idx] = action.replaceWith !== false ? action.replaceWith : action.user;

            return users;
        }

        case ADD_USER: {
            //add a user to the beginning of the list

            let users = {
                ...state
            };

            users.content.unshift(action.user);
            users.totalElements++;

            return users;
        }

        default:
            return state;
    }
};

const emails = (state = {}, action) => {
    switch (action.type) {
        case INSERT_EMAILS:
            //Replace the users in the state
            return {
                ...action.emails,
            };

        default:
            return state;
    }
};


const entities = combineReducers({users, emails});

export default entities;