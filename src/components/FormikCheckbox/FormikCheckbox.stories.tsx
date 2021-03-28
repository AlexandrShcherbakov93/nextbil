import { Form, Formik } from 'formik';
import React from 'react';
import { FormikCheckboxWithLabel } from './index';

export const Basic = () => (
  <Formik
    initialValues={{ acceptTerms: false, acceptConditions: false }}
    onSubmit={() => {}}
  >
    <Form>
      <FormikCheckboxWithLabel
        type="checkbox"
        name="acceptTerms"
        text={<span>Accept terms</span>}
        id="acceptTerms"
      />
      <FormikCheckboxWithLabel
        type="checkbox"
        name="acceptConditions"
        text={<span>Accept conditions</span>}
        id="acceptConditions"
      />
    </Form>
  </Formik>
);

export default {
  component: FormikCheckboxWithLabel,
  title: 'FormikCheckbox',
};
