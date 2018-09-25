/*
 * Info page
 */

import React from "react";
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.jsx";
import Paper from "@material-ui/core/Paper";

class Presentation extends React.Component {
    render() {
        return <Grid container>
            <GridItem xs={12} sm={12} md={12}>
                <Paper>
                    <h1>Hello!</h1>
                </Paper>
            </GridItem>
        </Grid>
    }
}

export default Presentation;
