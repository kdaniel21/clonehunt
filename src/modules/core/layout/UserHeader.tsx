import { Button, Icon, IconButton, Spinner } from '@chakra-ui/react'
import { useContext } from 'react'
import { FaHeartbeat } from 'react-icons/fa'
import UserContext from '../../auth/UserContext'
import UserAvatarPopover from './UserAvatarPopover'

const UserHeader: React.FC = () => {
  const { isLoading } = useContext(UserContext)

  if (isLoading) return <Spinner />

  return (
    <>
      <Button variant="ghost" colorScheme="orange">
        Submit product
      </Button>

      <IconButton
        colorScheme="orange"
        variant="unstyled"
        aria-label="Show notifications"
        icon={<Icon as={FaHeartbeat} />}
      />

      <UserAvatarPopover />
    </>
  )
}

export default UserHeader
