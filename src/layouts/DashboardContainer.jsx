import connect from "react-redux/es/connect/connect";
import {removeNotification} from "../actions/notifications";
import Dashboard from "./Dashboard";

const mapStateToProps = state => {
    return {notifications: state.ui.notifications};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    closeNotification: (notification) => {
        dispatch(removeNotification(notification));
    },
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
