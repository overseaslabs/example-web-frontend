/*
 * Input wrapper for redux form
 */


import React from "react";
import TextField from "@material-ui/core/TextField";

const ReduxFormTextField = ({input, meta: {touched, error}, ...custom}) => {
    const helperText = touched && error ? error : '';
    return <TextField error={touched && error !== undefined} helperText={helperText} {...input}{...custom}/>
};

export default ReduxFormTextField;