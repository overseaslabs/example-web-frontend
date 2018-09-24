export const TOGGLE_EMAIL_DRAWER = 'TOGGLE_EMAIL_DRAWER';

/**
 * Open or close the email drawer
 */
export const toggleEmailDrawer = (email) => ({
    type: TOGGLE_EMAIL_DRAWER,
    email
});