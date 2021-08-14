import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { Field } from 'formik'
import { cloneElement } from 'react'

interface FormInputFieldProps {
  name: string
  text?: string
  children?: React.ReactElement
}

const FormInputField: React.FC<FormInputFieldProps> = ({ text, name, children }) => {
  const capitalizedName = text || name.charAt(0).toUpperCase() + name.slice(1)

  const createInput = (field: any) => {
    const props = { ...field, id: name, placeholder: capitalizedName }
    return children ? cloneElement(children, { ...props }) : <Input {...props} />
  }

  return (
    <Field name={name}>
      {({ field, form }: any) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]} my="2">
          <FormLabel htmlFor={name}>{capitalizedName}</FormLabel>

          {createInput(field)}

          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

export default FormInputField
