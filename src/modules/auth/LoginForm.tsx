import { Button, Icon, useToast } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import PasswordInput from './PasswordInput'
import * as yup from 'yup'
import { FaSignInAlt } from 'react-icons/fa'
import FormInputField from './FormInputField'
import { useLoginMutation } from '../../generated/graphql'
import { useHistory } from 'react-router-dom'

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

  const [login] = useLoginMutation()
  const history = useHistory()
  const toast = useToast()
  const onLogin = async (value: LoginFormValues) => {
    await login({ variables: value })

    toast({ title: 'Success', status: 'success', description: 'Successfully logged in!' })

    history.push('/products')
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onLogin}>
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <FormInputField name="username" />
          <FormInputField name="password">
            <PasswordInput />
          </FormInputField>

          <Button
            type="submit"
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
