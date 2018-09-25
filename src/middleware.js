/*
 * Redux middleware
 */

import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';
import {applyMiddleware} from "redux";


const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

export default applyMiddleware(...middleware);