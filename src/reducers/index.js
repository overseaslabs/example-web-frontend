/*
 * Combines the top level reducers
 */

import {combineReducers} from 'redux';
import ui from "./ui";
import entities from "./entities";
import form from "./form";

const app = combineReducers({
    ui,
    entities,
    form
});

export default app;