export const TOGGLE_EMAIL_DRAWER = 'TOGGLE_EMAIL_DRAWER';
export const SORT_EMAILS = "SORT_EMAILS";

/**
 * Open or close the email drawer
 */
export const toggleEmailDrawer = (email) => ({
    type: TOGGLE_EMAIL_DRAWER,
    email
});

/**
 * Sort the emails list
 * @returns {{type: string}}
 */
export const sortEmails = (orderBy) => ({
    type: SORT_EMAILS,
    orderBy
});