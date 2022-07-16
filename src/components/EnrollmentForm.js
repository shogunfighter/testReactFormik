import React from "react";
import {Formik, Form} from "formik";
import * as Yup from "yup"
import FormikControl from "./FormikControl";

function EnrollmentForm() {

    const courseDropdownOptions = [
        {key: "Select your course", value: ''},
        {key: "React", value: 'react'},
        {key: "Angular", value: 'angular'},
        {key: "Vue", value: 'vue'},
    ];

    const skillsetCheckboxOptions = [
        {key: "HTML", value: 'skillsetOption1'},
        {key: "CSS", value: 'skillsetOption2'},
        {key: "JavaScript", value: 'skillsetOption3'},
    ];

    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skillset: [],
        courseDate: null
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid Format'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        skillset: Yup.array().required('Required'),
        courseDate: Yup.date().required('Required').nullable()
    });
    const onSubmit = values => console.log("Form values:", values);

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form>
                            <FormikControl control='chakrainput' type='email' label='Email' name='email'/>
                            <FormikControl control='chakrainput' type='text' label='Bio' name='bio'/>
                            {/*<FormikControl control='input' type='email' label='Email' name='email'/>*/}
                            {/*<FormikControl control='input' type='text' label='Bio' name='bio'/>*/}
                            <FormikControl control='select' label='Course' name='course' options={courseDropdownOptions} />
                            <FormikControl control='checkbox' label='Skillset' name='skillset' options={skillsetCheckboxOptions} />
                            <FormikControl control='date' label='Course Date' name='courseDate' />
                            <button type="submit" disabled={!formik.isValid || !formik.dirty}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default EnrollmentForm;