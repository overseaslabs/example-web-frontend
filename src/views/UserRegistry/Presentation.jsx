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
import DeleteUserModal from "./DeleteUserModal/Container.jsx";
import TableFooter from "@material-ui/core/TableFooter"
import TablePagination from "@material-ui/core/TablePagination"


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
        classes: PropTypes.object.isRequired
    };

    render() {
        const {classes, users, handleAddUser, handleEditUser, handleDeleteUser, handleChangePage, onChangeRowsPerPage} = this.props;

        const header = ['Name', 'Email', 'Since', 'Actions'];

        return <Grid container>
            <DeleteUserModal/>
            <EditUserModal/>

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
                                            return <TableCell className={classes.tableCell + " " + classes.tableHeadCell} key={key}>{title}</TableCell>
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
