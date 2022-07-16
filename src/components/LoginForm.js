import React from "react";

import {Formik, Form} from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function LoginForm() {

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid").required('Invalid Format'),
        password: Yup.string().required('Required')
    });

    const onSubmit = values => console.log("Submitted data:", values);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => {
                    console.log("formik:",formik);

                    return (
                        <Form>
                            <FormikControl control='input' type='email' label='Email' name='email'/>
                            <FormikControl control='input' type='password' label='Password' name='password'/>
                            <button type="submit" disabled={!formik.isValid || !formik.dirty}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    );

}

export default LoginForm;