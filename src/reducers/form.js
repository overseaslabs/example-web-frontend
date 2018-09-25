/*
 * Form reducers
 */

import {reducer} from 'redux-form';
import {SET_EDITED_USER, RESET_EDITED_USER} from "../actions/ureg/forms";
import {EDIT_USER_FORM} from "../views/UserRegistry/EditUserModal/Presentation";

const form = reducer.plugin({
    [EDIT_USER_FORM]: (state = {}, action) => {
        switch (action.type) {
            case SET_EDITED_USER:
                return {
                    ...state,
                    values: {
                        ...action.user
                    }
                };
            case RESET_EDITED_USER:
                return {};
            default:
                return state
        }
    }
});

export default form;