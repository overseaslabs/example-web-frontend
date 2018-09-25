/*
 * Email list actions
 */

export const INSERT_EMAILS = 'INSERT_EMAILS';

/**
 * Emails batch insert
 * @param emails
 * @returns {{type: string, emails: *}}
 */
export const insertEmails = (emails) => ({
    type: INSERT_EMAILS,
    emails
});