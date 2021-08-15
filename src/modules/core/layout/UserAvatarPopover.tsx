import { Avatar, Heading, Popover, PopoverBody, PopoverContent, PopoverTrigger, useToast } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import UserContext from '../../auth/UserContext'
import { chakra } from '@chakra-ui/react'
import { CurrentUserDocument, useLogoutMutation } from '../../../generated/graphql'
import { useContext } from 'react'

const UserAvatarPopover: React.FC = () => {
  const { user, refetchUser } = useContext(UserContext)

  const [logout] = useLogoutMutation({ refetchQueries: [CurrentUserDocument] })
  const toast = useToast()
  const history = useHistory()
  const onLogout = async () => {
    try {
      await logout()

      toast({ status: 'success', title: 'Success', description: 'You have been successfully logged out!' })
      history.push('/')
      refetchUser()
    } catch {}
  }

  const popoverItems = [
    { text: 'Profile', to: '/profile' },
    { text: 'My collections', to: '/collections' },
    { text: 'My topics', to: '/my-topics' },
    { text: 'Settings', to: '/settings' },
    { text: 'Subscriptions', to: '/subscriptions' },
    { text: 'Logout', action: onLogout },
  ]

  const handleItemClick = (item: any) => {
    if (item.action) item.action()
    if (item.to) history.push(item.to)
  }

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Avatar ml="3" name={user?.username} size="md" />
      </PopoverTrigger>

      <PopoverContent>
        <PopoverBody>
          {popoverItems.map((item) => (
            <chakra.div
              key={item.text}
              cursor="pointer"
              my="3"
              color="gray.600"
              _hover={{ color: 'gray.900' }}
              onClick={() => handleItemClick(item)}
            >
              <Heading as="h5" size="sm">
                {item.text}
              </Heading>
            </chakra.div>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default UserAvatarPopover
