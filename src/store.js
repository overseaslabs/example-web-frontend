import {createStore} from "redux";
import reducers from "./reducers/index";
import middleware from "./middleware";

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
        ureg: {
            modals: {
                editUser: {
                    open: false
                },
                deleteUser: {
                    open: false,
                    user: {}
                }
            }
        },
        mailer: {
            modals: {
                viewEmail: {
                    open: false,
                    email: {}
                }
            }
        }
    }
};

const store = createStore(reducers, state, middleware);

export default store;