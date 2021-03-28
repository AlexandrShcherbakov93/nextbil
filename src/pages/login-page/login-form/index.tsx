import React from 'react';
import { Formik, Form } from 'formik';
import { LoginFormValidationSchema } from './validation-schema';
import { LoginFormWrapper } from '../styled-components';
import {
  Block,
  FakeLink,
  FormError,
  FormHeader,
  FormSubmitButton,
  GridContainer,
} from '../../../components/SharedStyledComponents';
import passwordImg from '../../../img/password.svg';
import emailImg from '../../../img/email.svg';
import loader from '../../../img/loader.gif';
import { FormikCheckboxWithLabel } from '../../../components/FormikCheckbox';
import { FormikRadioWithLabel } from '../../../components/FormikRadio';
import { FormikInput } from '../../../components/FormikInput';
import { FormikSelect } from '../../../components/FormikSelect';

export const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          country: '',
          gender: '',
          acceptTerms: false,
        }}
        validationSchema={LoginFormValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 10000);
        }}
      >
        {({ setFieldValue, isSubmitting, isValid, dirty, touched, errors }) => {
          return (
            <Form>
              <FormHeader mr="4px 0">Create a new account</FormHeader>
              <GridContainer gtr="auto" gg="6px 0" mr="33px 0 25px">
                <FormikInput
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
                <FormikInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  imgSrc={emailImg}
                />
                <FormikInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  imgSrc={passwordImg}
                />
                <FormikSelect
                  type="text"
                  name="country"
                  placeholder="Select country"
                  setFieldValue={setFieldValue}
                  options={[
                    'Latvia',
                    'Lebanon',
                    'Lesotho',
                    'Liberia',
                    'Libya',
                  ].map((country) => ({
                    value: country,
                    text: country,
                    key: country,
                  }))}
                />
                <Block mr="10px 0 5px">
                  <GridContainer gtc="auto 1fr">
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
                  </GridContainer>
                  <FormError>{touched.gender && errors.gender}</FormError>
                </Block>
                <Block mr="5px 0 15px">
                  <FormikCheckboxWithLabel
                    type="checkbox"
                    name="acceptTerms"
                    text={
                      <span>
                        Accept <FakeLink>terms</FakeLink>
                        {' and '}
                        <FakeLink>conditions</FakeLink>
                      </span>
                    }
                    id="acceptTerms"
                  />
                </Block>
                <FormSubmitButton type="submit" notValid={!dirty || !isValid}>
                  {isSubmitting ? (
                    <img src={loader} width={20} height={20} alt="loader" />
                  ) : (
                    'Sign up'
                  )}
                </FormSubmitButton>
              </GridContainer>
            </Form>
          );
        }}
      </Formik>
    </LoginFormWrapper>
  );
};
