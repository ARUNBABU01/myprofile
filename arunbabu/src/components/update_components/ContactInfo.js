import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import PhoneInput from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
import { Styles } from '../../Styles';

const ContactInfoSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  alternate_email: Yup.string().email('Invalid email'),
  mobile: Yup.string().required('Mobile number is required'),
  whatsapp: Yup.string().required('Mobile number is required'),
  linkedin: Yup.string().url('Invalid URL'),
  github: Yup.string().url('Invalid URL'),
  xing: Yup.string().url('Invalid URL'),
  website: Yup.string().url('Invalid URL'),
});

const ContactInfo = ({ data, onDataChange }) => {
    const classes = Styles();
  const handleSubmit = (values) => {
    onDataChange(values);
  };

  return (
    <div className={classes.profileUpdateForm}>
      <Formik
        initialValues={data}
        validationSchema={ContactInfoSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="email"
              label="Email"
              type="email"
              as={TextField}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
            <Field
              name="alternate_email"
              label="Alternate Email"
              type="email"
              as={TextField}
              error={touched.alternate_email && !!errors.alternate_email}
              helperText={touched.alternate_email && errors.alternate_email}
            />
            <Field
              name="mobile"
              label="Mobile Number"
              as={TextField}
              error={touched.mobile && !!errors.mobile}
              helperText={touched.mobile && errors.mobile}
            >
              {({ field }) => (
                <PhoneInput
                  {...field}
                  placeholder="Mobile Number"
                  defaultCountry="IN" // You can set the default country code
                />
              )}
            </Field>
            <Field
              name="alternate_mobile"
              label="Alternate Mobile Number"
              as={TextField}
              error={touched.mobile && !!errors.mobile}
              helperText={touched.mobile && errors.mobile}
            >
              {({ field }) => (
                <PhoneInput
                  {...field}
                  placeholder="Alternate Mobile Number"
                  defaultCountry="IN" // You can set the default country code
                />
              )}
            </Field>
            <Field
              name="whatsapp"
              label="WhatsApp Number"
              as={TextField}
              error={touched.whatsapp && !!errors.whatsapp}
              helperText={touched.whatsapp && errors.whatsapp}
            >
              {({ field }) => (
                <PhoneInput
                  {...field}
                  placeholder="WhatsApp Number (optional)"
                  defaultCountry="IN" // You can set the default country code
                />
              )}
            </Field>
            <Field
              name="linkedin"
              label="LinkedIn"
              as={TextField}
              error={touched.linkedin && !!errors.linkedin}
              helperText={touched.linkedin && errors.linkedin}
            />
            <Field
              name="github"
              label="GitHub"
              as={TextField}
              error={touched.github && !!errors.github}
              helperText={touched.github && errors.github}
            />
            <Field
              name="xing"
              label="Xing"
              as={TextField}
              error={touched.xing && !!errors.xing}
              helperText={touched.xing && errors.xing}
            />
            <Field
              name="website"
              label="Website"
              as={TextField}
              error={touched.website && !!errors.website}
              helperText={touched.website && errors.website}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactInfo;
