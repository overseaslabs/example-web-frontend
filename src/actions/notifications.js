/*
UI Notifications
 */

import InfoIcon from "@material-ui/icons/Info";
import Notification from "../entities/Notification";

export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

/**
 * Show a notification
 * @param place
 * @param color
 * @param icon
 * @param message
 * @param ttl {int} Time to live in seconds
 */
export const addNotification = (message, color = "info", icon = InfoIcon, place = "br", ttl = 6) => dispatch => {
    const notification = new Notification(message, color, icon, place);

    dispatch(insertNotification(notification));

    setTimeout(() => {
        dispatch(removeNotification(notification));
    }, ttl * 1000);
};

/**
 * Insert a notification into the list
 * @param notification
 * @returns {{type: string, notification: *}}
 */
const insertNotification = (notification) => ({
    type: ADD_NOTIFICATION,
    notification
});

/**
 * Remove a notification
 * @param notification
 * @returns {{type: string, notification: *}}
 */
export const removeNotification = (notification) => ({
    type: REMOVE_NOTIFICATION,
    notification
});

