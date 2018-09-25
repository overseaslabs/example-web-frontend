import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.jsx";
import EditUserModal from "./EditUserModal/Container.jsx";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";
import Table from "@material-ui/core/Table";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";
import PersonIcon from "@material-ui/icons/Person";
import DeleteUserModal from "./DeleteUserModal/Container.jsx";
import TablePagination from "@material-ui/core/TablePagination"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Tooltip from "@material-ui/core/Tooltip";


const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

class Presentation extends React.Component {
    classes = this.props.classes;

    static propTypes = {
        handleAddUser: PropTypes.func.isRequired,
        handleEditUser: PropTypes.func.isRequired,
        handleDeleteUser: PropTypes.func.isRequired,
        handleChangePage: PropTypes.func.isRequired,
        onChangeRowsPerPage: PropTypes.func.isRequired,
        users: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        drawerOpen: PropTypes.bool.isRequired,
        drawerUser: PropTypes.object.isRequired,
        toggleDrawer: PropTypes.func.isRequired,
        drawerAnchor: PropTypes.string.isRequired,
        handleSort: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string,
    };

    render() {
        const {
            classes, users, handleAddUser, handleEditUser, handleDeleteUser, handleChangePage,
            onChangeRowsPerPage, drawerOpen, drawerUser, toggleDrawer, drawerAnchor, handleSort,
            order, orderBy
        } = this.props;

        const header = [
            ['Name', 'firstName'],
            ['Email', 'email'],
            ['Since', 'created'],
            ['Actions', null]
        ];

        return <Grid container>
            <DeleteUserModal/>
            <EditUserModal/>
            <Drawer open={drawerOpen} anchor={drawerAnchor} ModalProps={{onBackdropClick: toggleDrawer, onEscapeKeyDown: toggleDrawer}}>
                <List component="nav">
                    <ListItem>
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary="User Info"/>
                    </ListItem>
                </List>
                <Divider/>
                <List component="nav">
                    <ListItem>
                        <ListItemText primary={(drawerUser.firstName || "") + " " + (drawerUser.lastName || "")}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={drawerUser.email || ""}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Since " + drawerUser.created || ""}/>
                    </ListItem>
                </List>
            </Drawer>

            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Users</h4>
                        <p className={classes.cardCategoryWhite}>Manage Users</p>
                    </CardHeader>

                    <CardBody>
                        <div className={classes.tableResponsive}>
                            <Table className={classes.table}>
                                <TableHead className={classes["primaryTableHeader"]}>
                                    <TableRow>
                                        {header.map((title, key) => {
                                            return title[1] !== null ? (
                                                <TableCell className={classes.tableCell + " " + classes.tableHeadCell} key={key} sortDirection={orderBy === title[1] ? order : false}>
                                                    <Tooltip title="Sort" enterDelay={300}>
                                                        <TableSortLabel active={orderBy === title[1]} direction={order} onClick={() => handleSort(title[1])}>{title[0]}</TableSortLabel>
                                                    </Tooltip>
                                                </TableCell>
                                            ) : (
                                                <TableCell className={classes.tableCell + " " + classes.tableHeadCell} key={key}>{title[0]}</TableCell>
                                            )

                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.content.map((user, key) => {
                                        return (
                                            <TableRow key={user.id}>
                                                <TableCell className={classes.tableCell}>{user.firstName + " " + user.lastName}</TableCell>
                                                <TableCell className={classes.tableCell}>{user.email}</TableCell>
                                                <TableCell className={classes.tableCell}>{user.created}</TableCell>
                                                <TableCell className={classes.tableCell}>
                                                    <IconButton className={classes.button} onClick={() => toggleDrawer(user)}>
                                                        <InfoIcon/>
                                                    </IconButton>
                                                    <IconButton className={classes.button} onClick={() => handleEditUser(user)}>
                                                        <EditIcon/>
                                                    </IconButton>
                                                    <IconButton className={classes.button} onClick={() => handleDeleteUser(user)}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                        <TablePagination component="div" count={users.totalElements} onChangePage={handleChangePage} page={users.number} rowsPerPage={users.size} onChangeRowsPerPage={onChangeRowsPerPage}/>

                        <Button color="primary" onClick={handleAddUser}>Add User</Button>
                    </CardBody>
                </Card>
            </GridItem>
        </Grid>
    }
}

export default withStyles({...tableStyle, ...styles})(Presentation);
