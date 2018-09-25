/*
 * The state
 */

import {createStore} from "redux";
import reducers from "./reducers/index";
import middleware from "./middleware";

/**
 * Spring page
 */
export class PaginatedEntityContainer {
    /**
     * Default pagination size
     * @type {number}
     */
    static ROWS_PER_PAGE = 10;

    content = [];
    last = true;
    totalPages = 0;
    totalElements = 0;
    first = true;
    number = 0;
    numberOfElements = 0;
    size = PaginatedEntityContainer.ROWS_PER_PAGE;
}

const state = {
    entities: {
        users: new PaginatedEntityContainer(),
        emails: new PaginatedEntityContainer(),
    },
    ui: {
        //user registry page
        ureg: {
            //modal windows
            modals: {
                editUser: {
                    open: false
                },
                deleteUser: {
                    open: false,
                    user: {}
                }
            },
            //side panel with user info
            drawer: {
                open: false,
                user: {},
                anchor: 'right'
            },
            //user list sorting
            users: {
                order: 'asc',
                orderBy: null
            }
        },
        //mailer page
        mailer: {
            modals: {
                viewEmail: {
                    open: false,
                    email: {}
                }
            },
            drawer: {
                open: false,
                email: {},
                anchor: 'right'
            },
            //email list sorting
            emails: {
                order: 'asc',
                orderBy: null
            }
        },
        //UI-wide notifications
        notifications: []
    }
};

const store = createStore(reducers, state, middleware);

export default store;