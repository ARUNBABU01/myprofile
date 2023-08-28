import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Styles } from '../../Styles';
import { useTheme } from '@mui/material/styles';

const PersonalInfoSchema = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  dob: Yup.date().required('Date of Birth is required'),
  title: Yup.string().required('Title is required'),
});


const PersonalInfo = ({ data, onDataChange }) => {
    const classes = Styles();
    const theme = useTheme();
  const handleSubmit = (values) => {
    onDataChange(values);
  };

  return (
    <div className={classes.profileUpdateForm}>
      <Formik
        initialValues={data}
        validationSchema={PersonalInfoSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="firstname"
              label="First Name"
              as={TextField}
              error={touched.firstname && !!errors.firstname}
              helperText={touched.firstname && errors.firstname}
              
            />
            <Field
              name="lastname"
              label="Last Name"
              as={TextField}
              error={touched.lastname && !!errors.lastname}
              helperText={touched.lastname && errors.lastname}
            />
            <Field
              name="dob"
              label="Date of Birth"
              type="date"
              as={TextField}
              InputLabelProps={{
                shrink: true,
              }}
              error={touched.dob && !!errors.dob}
              helperText={touched.dob && errors.dob}
            />
            <Field
              name="title"
              label="Title"
              as={TextField}
              select
              error={touched.title && !!errors.title}
              helperText={touched.title && errors.title}
            >
              <MenuItem value="Mr.">Mr.</MenuItem>
              <MenuItem value="Ms.">Ms.</MenuItem>
              <MenuItem value="Mrs.">Mrs.</MenuItem>
            </Field>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
