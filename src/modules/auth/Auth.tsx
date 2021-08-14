import { Box, Heading, chakra, Button, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface AuthProps {
  children: React.ReactNode
  isRegisterMode: boolean
}

const Auth: React.FC<AuthProps> = ({ children, isRegisterMode }) => {
  const headingText = isRegisterMode ? 'Sign up' : 'Sign in'
  const switchButtonText = isRegisterMode ? 'I already have an account!' : `I don't have an account yet!`

  return (
    <Box textAlign="center" mt="5" maxW="96" mx="auto">
      <Image
        display="block"
        mx="auto"
        mb="5"
        src="https://ph-static.imgix.net/category-tech/kitty.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=92&fit=max&dpr=1"
      />

      <Heading as="h2" size="md">
        {headingText} on Clone Hunt
      </Heading>
      <Text color="gray.500">
        Join our community of friendly folks discovering and sharing the latest products in tech.
      </Text>

      <chakra.div mt="5">
        {children}

        <Link to={isRegisterMode ? '/login' : '/register'}>
          <Button colorScheme="orange" variant="link" size="sm" mt="4" float="right">
            {switchButtonText}
          </Button>
        </Link>
      </chakra.div>
    </Box>
  )
}

export default Auth
