import { useToast, Button, Icon } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { FaUserPlus } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { useRegisterMutation } from '../generated/graphql'
import Auth from '../modules/auth/Auth'
import FormInputField from '../modules/auth/FormInputField'
import FormSwitchField from '../modules/auth/FormSwitchField'
import PasswordInput from '../modules/auth/PasswordInput'
import * as yup from 'yup'

interface RegisterFormValues {
  username: string
  email: string
  password: string
  passwordConfirm: string
  doesAcceptTerms: boolean
  doesSubscribeToNewsletter: boolean
}

const RegisterPage: React.FC = () => {
  const initialValues: RegisterFormValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    doesAcceptTerms: false,
    doesSubscribeToNewsletter: false,
  }

  const validationSchema = yup.object({
    username: yup.string().min(4).required().label('Username'),
    email: yup.string().email().optional().label('Email'),
    password: yup.string().min(6).required().label('Password'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match!')
      .required()
      .label('Password confirm'),
    doesAcceptTerms: yup.boolean().isTrue('You must accept the terms of service.').required(),
    doesSubscribeToNewsletter: yup.boolean().optional(),
  })

  const [register] = useRegisterMutation()
  const history = useHistory()
  const toast = useToast()
  const onRegister = async (values: RegisterFormValues) => {
    try {
      await register({ variables: values })

      toast({
        title: 'Success',
        status: 'success',
        description: 'You have signed up successfully! Now you can log in.',
      })

      history.push('/login')
    } catch {}
  }

  return (
    <Auth isRegisterMode={true}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onRegister}>
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <FormInputField name="username" />

            <FormInputField name="email" />

            <FormInputField name="password">
              <PasswordInput></PasswordInput>
            </FormInputField>

            <FormInputField name="passwordConfirm" text="Confirm password">
              <PasswordInput></PasswordInput>
            </FormInputField>

            <FormSwitchField name="doesAcceptTerms" text="I accept the terms of service." />
            <FormSwitchField name="doesSubscribeToNewsletter" text="I want to receive occasional updates via email." />

            <Button
              type="submit"
              mt="3"
              leftIcon={<Icon as={FaUserPlus} />}
              colorScheme="orange"
              isFullWidth={true}
              isLoading={isSubmitting}
              isDisabled={!isValid || !dirty}
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </Auth>
  )
}
export default RegisterPage
