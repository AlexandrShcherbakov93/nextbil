import { Form, Formik } from 'formik';
import React from 'react';
import { FormikSelect } from './index';

const CounriesProps = {
  options: ['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya'].map(
    (country) => ({
      value: country,
      text: country,
      key: country,
    }),
  ),
  onChange: () => {},
  onBlur: () => {},
  placeholder: 'Choose country',
  type: 'text',
  name: 'country',
};

export const Basic = () => (
  <Formik initialValues={{ country: '' }} onSubmit={() => {}}>
    {({ setFieldValue }) => (
      <Form>
        <FormikSelect {...CounriesProps} setFieldValue={setFieldValue} />
      </Form>
    )}
  </Formik>
);

export default {
  component: FormikSelect,
  title: 'FormikSelect',
};
