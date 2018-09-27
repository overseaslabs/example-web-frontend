/*
 * Info page
 */

import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import diagram from "../../assets/img/diagram.png";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import GitHub from "../../components/Icons/GitHub";
import Docker from "../../components/Icons/Docker";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    chip: {
        margin: theme.spacing.unit / 2,
    },
    diagram: {
        maxWidth: "100%"
    },
    list: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

class Presentation extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;


        return (<Paper className={classes.root}>
            <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="primary" textColor="primary" centered>
                <Tab label="Project info"/>
                <Tab label="Source code"/>
                <Tab label="Docker images"/>
            </Tabs>

            {value === 0 && (
                <TabContainer>
                    <Typography variant="display1" gutterBottom>
                        Project information
                    </Typography>
                    <Typography gutterBottom>
                        This project is an addendum to the Sergey's CV and aimed to demonstrate the application of the skills claimed in the CV, some of which are:
                    </Typography>
                    <br/>

                    {/*languages*/}
                    <Typography variant="title" gutterBottom>
                        Programming, query and markup languages
                    </Typography>
                    <div>
                        <Chip label="Java"/> <Chip label="JavaScript"/> <Chip label="JSX"/> <Chip label="SQL"/> <Chip label="BASH"/> <Chip label="HTML"/> <Chip label="CSS"/>
                    </div>
                    <br/>

                    {/*java*/}
                    <Typography variant="title" gutterBottom>
                        Java
                    </Typography>
                    <br/>

                    <Typography variant="subheading" gutterBottom>
                        Spring projects family
                    </Typography>
                    <div>
                        <Chip label="Spring Framework"/> <Chip label="Spring Boot"/> <Chip label="Spring Boot Data"/>
                    </div>
                    <br/>

                    <Typography variant="subheading" gutterBottom>
                        Libraries and frameworks
                    </Typography>
                    <div>
                        <Chip label="Hibernate"/> <Chip label="JUnit"/> <Chip label="Mockito"/> <Chip label="SLF4J"/> <Chip label="Thymeleaf"/> <Chip label="Jackson"/> <Chip label="Jedis"/> <Chip label="SendGrid Web API"/>
                    </div>
                    <br/>

                    <Typography variant="subheading" gutterBottom>
                        Tools
                    </Typography>
                    <div>
                        <Chip label="Gradle"/>
                    </div>
                    <br/>

                    {/*Java Script*/}
                    <Typography variant="title" gutterBottom>
                        JavaScript (ES6+) and CSS
                    </Typography>
                    <br/>
                    <Typography variant="subheading" gutterBottom>
                        Libraries and frameworks
                    </Typography>
                    <div>
                        <Chip label="React"/> <Chip label="Redux"/> <Chip label="Material UI"/> and many other libraries
                    </div>
                    <br/>

                    <Typography variant="subheading" gutterBottom>
                        Tools and technologies
                    </Typography>
                    <div>
                        <Chip label="Webpack"/> <Chip label="Babel"/> <Chip label="NodeJS"/> <Chip label="NPM"/> <Chip label="SASS"/> <Chip label="WebSocket"/>
                    </div>
                    <br/>

                    {/*Technologies*/}

                    <Typography variant="title" gutterBottom>
                        Infrastructure and platform
                    </Typography>
                    <div>
                        <Chip label="AWS EC2"/> <Chip label="AWS RDS"/> <Chip label="Docker"/> <Chip label="Swarm"/>
                    </div>
                    <br/>

                    <Typography variant="title" gutterBottom>
                        Tools and software
                    </Typography>
                    <div>
                        <Chip label="Git"/> <Chip label="Kong"/> <Chip label="Postgres"/>
                    </div>
                    <br/>

                    {/*project description*/}
                    <Typography gutterBottom>
                        The app consists of 2 microservices, user interface, API gate and database server. The UI allows to register new users in the app, every new registered user receives a welcome email. Registered users and sent emails
                        can be viewed via the user interface. A scenario for familiarization with the application can be:
                    </Typography>

                    <ul>
                        <li>Go to the the User Registry tab and add a new user. Disposable email service such as <a href="https://temp-mail.org/" target="_blank">https://temp-mail.org/</a> can be used for testing purposes.</li>
                        <li>Receive a success notification in the UI saying "An email has been successfully sent". The notification has been received from the Mailer microservice via WebSocket</li>
                        <li>Receive a welcome email sent by the app through sendgrid</li>
                        <li>View the user info hitting the information icon on the user list, edit and delete user clicking the appropriate icons</li>
                        <li>Go to the Mailer tab and look up the welcome email that has been sent by the app</li>
                        <li>View the email info hitting the information icon on the list</li>
                        <li>Check the source code on GitHub. The links can be found on <a href="#" onClick={() => this.handleChange(null, 1)}> the source code tab</a></li>
                        <li>Check the docker image. The links can be found on <a href="#" onClick={() => this.handleChange(null, 2)}> the docker images tab</a></li>
                    </ul>

                    <Typography gutterBottom>
                        The structure of the app is represented by the following diagram:
                    </Typography>
                    <br/>

                    <img src={diagram} className={classes.diagram}/>
                    <br/>
                    <Typography gutterBottom>
                        Thank you for your attention.
                    </Typography>
                </TabContainer>
            )}

            {value === 1 && (
                <TabContainer>
                    <div className={classes.list}>
                        <List>
                            <a href="https://github.com/overseaslabs/docker-build" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <GitHub/>
                                    </Avatar>
                                    <ListItemText primary="Shell script for bulk image building" secondary="https://github.com/overseaslabs/docker-build"/>
                                </ListItem>
                            </a>
                            <a href="https://github.com/overseaslabs/example-utils" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <GitHub/>
                                    </Avatar>
                                    <ListItemText primary="Utility classes used across the microservices" secondary="https://github.com/overseaslabs/example-utils"/>
                                </ListItem>
                            </a>
                            <a href="https://github.com/overseaslabs/example-web-frontend" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <GitHub/>
                                    </Avatar>
                                    <ListItemText primary="React web client" secondary="https://github.com/overseaslabs/example-web-frontend"/>
                                </ListItem>
                            </a>
                            <a href="https://github.com/overseaslabs/example-user-registry" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <GitHub/>
                                    </Avatar>
                                    <ListItemText primary="User Registry microservice" secondary="https://github.com/overseaslabs/example-user-registry"/>
                                </ListItem>
                            </a>
                            <a href="https://github.com/overseaslabs/example-web-backend" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <GitHub/>
                                    </Avatar>
                                    <ListItemText primary="Frontend server" secondary="https://github.com/overseaslabs/example-web-backend"/>
                                </ListItem>
                            </a>
                            <a href="https://github.com/overseaslabs/example-mailer" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <GitHub/>
                                    </Avatar>
                                    <ListItemText primary="Mailer microservice" secondary="https://github.com/overseaslabs/example-mailer"/>
                                </ListItem>
                            </a>
                            <a href="https://github.com/overseaslabs/example-entities" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <GitHub/>
                                    </Avatar>
                                    <ListItemText primary="The entities used in the project" secondary="https://github.com/overseaslabs/example-entities"/>
                                </ListItem>
                            </a>
                            <a href="https://github.com/overseaslabs/example-postgres" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <GitHub/>
                                    </Avatar>
                                    <ListItemText primary="Dockerfile for building a postgres image with an initialization script" secondary="https://github.com/overseaslabs/example-postgres"/>
                                </ListItem>
                            </a>
                            <a href="https://github.com/overseaslabs/example-stack" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <GitHub/>
                                    </Avatar>
                                    <ListItemText primary="The stack of the services" secondary="https://github.com/overseaslabs/example-stack"/>
                                </ListItem>
                            </a>
                            <a href="https://github.com/overseaslabs/example-web" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <GitHub/>
                                    </Avatar>
                                    <ListItemText primary="Multi-project gradle build, combines the web server and client parts producing a single JAR" secondary="https://github.com/overseaslabs/example-web"/>
                                </ListItem>
                            </a>
                            <a href="https://github.com/overseaslabs/example-kong" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <GitHub/>
                                    </Avatar>
                                    <ListItemText primary="Dockerfile for Kong API gate" secondary="https://github.com/overseaslabs/example-kong"/>
                                </ListItem>
                            </a>
                        </List>
                    </div>
                </TabContainer>
            )}

            {value === 2 && (
                <TabContainer>
                    <div className={classes.list}>
                        <List>
                            <a href="https://hub.docker.com/r/overseaslabs/example-kong/" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <Docker/>
                                    </Avatar>
                                    <ListItemText primary="Kong API Gate" secondary="https://hub.docker.com/r/overseaslabs/example-kong/"/>
                                </ListItem>
                            </a>
                            <a href="https://hub.docker.com/r/overseaslabs/example-ureg/" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <Docker/>
                                    </Avatar>
                                    <ListItemText primary="User Registry microservice" secondary="https://hub.docker.com/r/overseaslabs/example-ureg/"/>
                                </ListItem>
                            </a>
                            <a href="https://hub.docker.com/r/overseaslabs/example-mailer/" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <Docker/>
                                    </Avatar>
                                    <ListItemText primary="Mailer microservice" secondary="https://hub.docker.com/r/overseaslabs/example-mailer/"/>
                                </ListItem>
                            </a>
                            <a href="https://hub.docker.com/r/overseaslabs/example-web/" target="_blank">
                                <ListItem button>
                                    <Avatar>
                                        <Docker/>
                                    </Avatar>
                                    <ListItemText primary="Front server" secondary="https://hub.docker.com/r/overseaslabs/example-web/"/>
                                </ListItem>
                            </a>
                        </List>
                    </div>
                </TabContainer>
            )}
        </Paper>)
    }
}

export default withStyles(styles)(Presentation);
