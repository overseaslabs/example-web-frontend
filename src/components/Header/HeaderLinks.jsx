import React from "react";
import classNames from "classnames";
import {Manager, Reference, Popper} from "react-popper";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
    state = {
        open: false
    };
    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;
        return (
            <div>
                <Manager>
                    <Popper
                        placement="bottom-end"
                        eventsEnabled={open}
                    >
                        {({ref, style, placement, outOfBoundaries, scheduleUpdate, arrowProps}) => (
                            <div
                                ref={ref}
                                className={
                                    classNames({[classes.popperClose]: !open}, {[classes.popperResponsive]: true})
                                }
                                style={{
                                    position: "absolute",
                                    willChange: "transform",
                                }}
                                data-placement={placement}
                            >
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <Grow
                                        in={open}
                                        id="menu-list"
                                        style={{transformOrigin: "0 0 0"}}
                                    >
                                        <Paper className={classes.dropdown}>
                                            <MenuList role="menu">
                                                <MenuItem
                                                    onClick={this.handleClose}
                                                    className={classes.dropdownItem}
                                                >
                                                    Mike John responded to your email
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={this.handleClose}
                                                    className={classes.dropdownItem}
                                                >
                                                    You have 5 new tasks
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={this.handleClose}
                                                    className={classes.dropdownItem}
                                                >
                                                    You're now friend with Andrew
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={this.handleClose}
                                                    className={classes.dropdownItem}
                                                >
                                                    Another Notification
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={this.handleClose}
                                                    className={classes.dropdownItem}
                                                >
                                                    Another One
                                                </MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Grow>
                                </ClickAwayListener>
                            </div>
                        )}
                    </Popper>
                </Manager>
            </div>
        );
    }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
