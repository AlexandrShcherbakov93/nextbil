import * as Yup from 'yup';

export const LoginFormValidationSchema = Yup.object({
  name: Yup.string()
    .required('Please enter a valid name')
    .matches(/^[a-zA-Z]+$/, 'Name can only contain Latin letters'),
  email: Yup.string()
    .required('Please enter a valid email address')
    .email('Please enter a valid email address'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 symbols')
    .required('Password must contain at least 6 symbols'),
  country: Yup.string().required('You must select your country'),
  gender: Yup.string().required('You must select the gender'),
  acceptTerms: Yup.boolean().oneOf([true], 'You must accept the policies'),
});
