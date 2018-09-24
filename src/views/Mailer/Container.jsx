import Mailer from "./Presentation.jsx";
import {connect} from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import {openViewEmailModal} from "../../actions/mailer/ui";
import {fetchEmails} from "../../actions/mailer/api";

class Container extends React.Component {
    static propTypes = {
        emails: PropTypes.object.isRequired,
    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchEmails());
    };

    render() {
        return <Mailer {...this.props}/>
    }
}

const mapStateToProps = (state, ownProps) => {
    const {emails} = state.entities;

    return {emails};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleOpenEmail: () => {
            dispatch(openViewEmailModal());
        },
        onRefresh: (size, page) => {
            dispatch(fetchEmails(page, size));
        },
        handleChangePage: (size, page) => {
            dispatch(fetchEmails(page, size));
        },
        onChangeRowsPerPage: (size, page) => {
            dispatch(fetchEmails(page, size));
        },
        dispatch
    }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onChangeRowsPerPage: (event) => dispatchProps.onChangeRowsPerPage(event.target.value, stateProps.emails.number),
    handleChangePage: (event, page) => dispatchProps.handleChangePage(stateProps.emails.size, page),
    onRefresh:() => dispatchProps.onRefresh(stateProps.emails.size, stateProps.emails.number),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Container);