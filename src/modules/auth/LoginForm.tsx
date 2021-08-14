import { Button, Icon } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import PasswordInput from './PasswordInput'
import * as yup from 'yup'
import { FaSignInAlt } from 'react-icons/fa'
import FormInputField from './FormInputField'

interface LoginFormValues {
  username: string
  password: string
}

const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = {
    username: '',
    password: '',
  }

  const validationSchema = yup.object({
    username: yup.string().required().label('Username'),
    password: yup.string().min(6).required().label('Password'),
  })

  const onLogin = () => {}

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onLogin}>
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <FormInputField name="username" />
          <FormInputField name="password">
            <PasswordInput />
          </FormInputField>

          <Button
            mt="3"
            leftIcon={<Icon as={FaSignInAlt} />}
            colorScheme="orange"
            isFullWidth={true}
            isLoading={isSubmitting}
            isDisabled={!isValid || !dirty}
          >
            Sign in
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
