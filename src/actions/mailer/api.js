import {insertEmails} from "./list";
import {PaginatedEntityContainer} from "../../store";


export const fetchEmails = (page = 0, rowsPerPage = PaginatedEntityContainer.ROWS_PER_PAGE) => async dispatch => {
    const response = await fetch(`/mailer/emails?page=${page}&size=${rowsPerPage}`);

    if (response.status !== 200) {
        throw new Error("Couldn't fetch the emails");
    }

    const emails = await response.json();

    dispatch(insertEmails(emails));
};