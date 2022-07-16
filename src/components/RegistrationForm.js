import React from "react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function RegistrationForm() {

    const radioOptions = [
        {key: "Email", value: 'emailmoc'},
        {key: "Telephone", value: 'telephonemoc'},
    ];

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid").required('Invalid Format'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], "Passwords must match").required('Required'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('Required')
        })
    });

    const onSubmit = values => console.log("Formit onSubmit:",values);

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    // console.log("formik:", formik);
                    // console.log("formik.isValid:",formik.isValid);
                    // console.log("formik.isDirty:",formik.isDirty);
                    return(
                        <Form>
                            <FormikControl control='input' type='email' label='Email' name='email'/>
                            <FormikControl control='input' type='password' label='Password' name='password'/>
                            <FormikControl control='input' type='password' label='Confirm Password' name='confirmPassword'/>
                            <FormikControl control='radio' label='Mode of contact' name='modeOfContact' options={radioOptions}/>
                            <FormikControl control='input' type='tel' label='Phone' name='phone'/>
                            <button type="submit" disabled={!formik.isValid || !formik.dirty}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default RegistrationForm;
