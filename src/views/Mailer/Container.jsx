import Mailer from "./Presentation.jsx";
import {connect} from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import {sortEmails, toggleEmailDrawer} from "../../actions/mailer/ui";
import {fetchEmails} from "../../actions/mailer/api";
import SortingHelper from "../../services/SortingHelper";

class Container extends React.Component {
    static propTypes = {
        emails: PropTypes.object.isRequired,
    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchEmails());
    };

    render() {
        let {emails, order, orderBy} = this.props;
        emails.content = SortingHelper.stableSort(emails.content, SortingHelper.getSorting(order, orderBy));

        return <Mailer emails={emails} order={order} orderBy={orderBy} {...this.props}/>
    }
}

const mapStateToProps = (state, ownProps) => {
    const {emails} = state.entities;

    const drawerOpen = state.ui.mailer.drawer.open;
    const drawerEmail = state.ui.mailer.drawer.email;
    const drawerAnchor = state.ui.mailer.drawer.anchor;

    const {order, orderBy} = state.ui.mailer.emails;

    return {emails, drawerOpen, drawerEmail, drawerAnchor, order, orderBy};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRefresh: (size, page) => {
            dispatch(fetchEmails(page, size));
        },
        handleChangePage: (size, page) => {
            dispatch(fetchEmails(page, size));
        },
        onChangeRowsPerPage: (size, page) => {
            dispatch(fetchEmails(page, size));
        },
        toggleDrawer: (email) => dispatch(toggleEmailDrawer(email)),
        handleSort: (rowId) => dispatch(sortEmails(rowId)),
        dispatch
    }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onChangeRowsPerPage: (event) => dispatchProps.onChangeRowsPerPage(event.target.value, stateProps.emails.number),
    handleChangePage: (event, page) => dispatchProps.handleChangePage(stateProps.emails.size, page),
    onRefresh: () => dispatchProps.onRefresh(stateProps.emails.size, stateProps.emails.number),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Container);