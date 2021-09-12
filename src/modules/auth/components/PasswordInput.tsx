import { Icon, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const PasswordInput: React.FC = (props: any) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => setShowPassword(!showPassword)

  const FaIcon = showPassword ? FaEyeSlash : FaEye

  return (
    <InputGroup>
      <Input {...props} pr="12" type={showPassword ? 'text' : 'password'} placeholder="Password" />

      <InputRightElement w="10">
        <IconButton
          variant="unstyled"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          icon={<Icon as={FaIcon} />}
          onClick={toggleShowPassword}
        />
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
