import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import NavigationButton from './NavigationButton'

const GuestHeader: React.FC = () => (
  <>
    <NavigationButton text="How to post a product?" to="/help" />
    <NavigationButton text="Sign In" to="/login" />

    <Link to="/register">
      <Button colorScheme="orange" variant="solid">
        Sign Up
      </Button>
    </Link>
  </>
)

export default GuestHeader
