import React from "react";
import {Field} from "formik";

import {
    Input,
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react'

function ChakraInput(props) {
    const {label, name, ...rest} = props;

    return (
        <Field name={name}>
            {
                ({field, form}) => {
                    console.log("field:",field);
                    console.log("form:",form);
                    return (
                        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                            <FormLabel htmlFor={name}>{label}</FormLabel>
                            <Input id={name}{...rest} {...field} />
                            <FormHelperText>{form.errors[name]}</FormHelperText>
                        </FormControl>
                    )
                }
            }
        </Field>
    );
};

export default ChakraInput;