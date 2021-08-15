import { useToast, Button, Icon } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { FaSignInAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { CurrentUserDocument, useLoginMutation } from '../generated/graphql'
import Auth from '../modules/auth/Auth'
import FormInputField from '../modules/auth/FormInputField'
import PasswordInput from '../modules/auth/PasswordInput'
import * as yup from 'yup'

interface LoginFormValues {
  username: string
  password: string
}

const LoginPage: React.FC = () => {
  const initialValues: LoginFormValues = {
    username: '',
    password: '',
  }

  const validationSchema = yup.object({
    username: yup.string().required().label('Username'),
    password: yup.string().min(6).required().label('Password'),
  })

  const [login] = useLoginMutation({ refetchQueries: [CurrentUserDocument] })
  const history = useHistory()
  const toast = useToast()
  const onLogin = async (value: LoginFormValues) => {
    try {
      await login({ variables: value })

      toast({ title: 'Success', status: 'success', description: 'Successfully logged in!' })

      history.push('/products')
    } catch {}
  }

  return (
    <Auth isRegisterMode={false}>
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
    </Auth>
  )
}

export default LoginPage
