import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.jsx";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";
import Table from "@material-ui/core/Table";
import Refresh from "@material-ui/icons/Refresh";

import TablePagination from "@material-ui/core/TablePagination"
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import EmailIcon from "@material-ui/icons/Email";
import InfoIcon from "@material-ui/icons/Info";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import Drawer from "@material-ui/core/Drawer/Drawer";
import IconButton from "@material-ui/core/IconButton/IconButton";


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
        handleChangePage: PropTypes.func.isRequired,
        onChangeRowsPerPage: PropTypes.func.isRequired,
        onRefresh: PropTypes.func.isRequired,
        emails: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        drawerOpen: PropTypes.bool.isRequired,
        drawerEmail: PropTypes.object.isRequired,
        toggleDrawer: PropTypes.func.isRequired,
        drawerAnchor: PropTypes.string.isRequired,
    };

    render() {
        const {classes, emails, handleChangePage, onChangeRowsPerPage, onRefresh, drawerOpen, drawerEmail, toggleDrawer, drawerAnchor} = this.props;

        const header = ['Date', 'Recipient', 'Email', 'Actions'];

        return <Grid container>
            <Drawer open={drawerOpen} anchor={drawerAnchor} ModalProps={{onBackdropClick: toggleDrawer, onEscapeKeyDown: toggleDrawer}}>
                <List component="nav">
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Email Info"/>
                    </ListItem>
                </List>
                <Divider/>
                <List component="nav">
                    <ListItem>
                        <ListItemText primary={`To ${drawerEmail.recipient || ""} <${drawerEmail.email || ""}>`}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Sent " + drawerEmail.created || ""}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText>
                            <pre>{drawerEmail.content}</pre>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>

            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Emails</h4>
                        <p className={classes.cardCategoryWhite}>Manage Emails</p>
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
                                    {emails.content.map((email, key) => {
                                        return (
                                            <TableRow key={email.id}>
                                                <TableCell className={classes.tableCell}>{email.created}</TableCell>
                                                <TableCell className={classes.tableCell}>{email.recipient}</TableCell>
                                                <TableCell className={classes.tableCell}>{email.email}</TableCell>
                                                <TableCell>
                                                    <IconButton className={classes.button} onClick={() => toggleDrawer(email)}>
                                                        <InfoIcon/>
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <GridItem>
                                <Button color="primary" onClick={onRefresh} round justIcon>
                                    <Refresh/>
                                </Button>
                            </GridItem>
                            <GridItem>
                                <TablePagination component="div" count={emails.totalElements} onChangePage={handleChangePage} page={emails.number} rowsPerPage={emails.size} onChangeRowsPerPage={onChangeRowsPerPage}/>

                            </GridItem>
                        </Grid>
                    </CardBody>
                </Card>
            </GridItem>
        </Grid>
    }
}

export default withStyles({...tableStyle, ...styles})(Presentation);
