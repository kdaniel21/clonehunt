import { Avatar, Box, Button, Flex, Heading, Popover, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { User } from '../../../generated/graphql'

export type UserProfilePreview = Pick<User, 'id' | 'username'> & {
  avatarUrl: string
  description?: string
  pointsCount: number
}

interface UserPreviewAvatarProps {
  user: UserProfilePreview
}

const UserPreviewAvatar: React.FC<UserPreviewAvatarProps> = ({ user }) => {
  const profileUrl = `/u/${user.id}`

  return (
    <Popover trigger="hover" placement="top">
      <PopoverTrigger>
        <Link to={profileUrl}>
          <Avatar src={user.avatarUrl} />
        </Link>
      </PopoverTrigger>

      <PopoverContent py="4" px="3">
        <Link to={profileUrl}>
          <Flex>
            <Avatar mr="3" src={user.avatarUrl} />

            <Box>
              <Heading as="h6" size="xs">
                Foo Bar
              </Heading>

              <Text fontSize="0.9rem" color="GrayText">
                @{user.username}
              </Text>
            </Box>
          </Flex>
        </Link>

        <Text my="3" color="GrayText" fontSize="0.9rem">
          {user.description}
        </Text>

        <Flex alignItems="center">
          <Button colorScheme="orange" textTransform="uppercase" size="xs" mr="2">
            Follow
          </Button>

          <Text color="GrayText" fontSize="0.8em">
            {user.pointsCount} points
          </Text>
        </Flex>
      </PopoverContent>
    </Popover>
  )
}

export default UserPreviewAvatar
