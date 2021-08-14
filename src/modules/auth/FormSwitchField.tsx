import { Flex, FormControl, FormErrorMessage, FormLabel, Switch } from '@chakra-ui/react'
import { Field } from 'formik'

interface FormSwitchFieldProps {
  name: string
  text: string
}

const FormSwitchField: React.FC<FormSwitchFieldProps> = ({ name, text }) => {
  return (
    <Field name={name}>
      {({ field, form }: any) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]} my="4">
          <Flex alignItems="center">
            <Switch {...field} id={name} mr="3"></Switch>
            <FormLabel htmlFor={name} mb="0">
              {text}
            </FormLabel>
          </Flex>

          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

export default FormSwitchField
