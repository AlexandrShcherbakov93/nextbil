import { Form, Formik } from 'formik';
import React from 'react';
import { FormikRadioWithLabel } from './index';

export const Basic = () => (
  <Formik initialValues={{ gender: '' }} onSubmit={() => {}}>
    <Form>
      <FormikRadioWithLabel
        type="radio"
        name="gender"
        value="male"
        text="Male"
        id="male"
      />
      <FormikRadioWithLabel
        type="radio"
        name="gender"
        value="female"
        text="Female"
        id="female"
      />
    </Form>
  </Formik>
);

export default {
  component: FormikRadioWithLabel,
  title: 'FormikRadio',
};
