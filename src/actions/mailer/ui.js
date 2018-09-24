export const TOGGLE_VIEW_EMAIL_MODAL = 'TOGGLE_VIEW_EMAIL_MODAL';

export const openViewEmailModal = (email) => ({
    type: TOGGLE_VIEW_EMAIL_MODAL,
    open: true,
    email
});

export const closeViewEmailModal = () => ({
    type: TOGGLE_VIEW_EMAIL_MODAL,
    open: false
});