import React from "react";
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

function TextArea(props) {
    const {label, name, ...rest} = props;

    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} {...rest}></Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    );
};

export default TextArea;