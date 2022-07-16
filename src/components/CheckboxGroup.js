import React from "react";
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

function CheckboxGroup(props) {
    const {label, name, options, ...rest} = props;

    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input type="checkbox" id={option.id} {...field} value={option.value} checked={field.value.includes(option.value)}/>
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default CheckboxGroup;