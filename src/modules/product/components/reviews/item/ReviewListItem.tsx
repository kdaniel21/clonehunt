import { Box, Flex, Heading } from '@chakra-ui/layout'
import { User } from '../../../../../generated/graphql'
import { Text } from '@chakra-ui/react'
import UserPreviewAvatar from '../../UserPreviewAvatar'
import ReviewUpvoteButton from './ReviewUpvoteButton'
import ReviewReplyButton from './ReviewReplyButton'

export interface Review {
  id: string
  content: string
  upvoteCount: number
  user: Pick<User, 'id' | 'username'> & { avatarUrl: string; pointsCount: number; description: string }
  createdAt: Date
  updatedAt: Date
  children: Review[]
}

interface ReviewListItemProps {
  review: Review
}

const ReviewListItem: React.FC<ReviewListItemProps> = ({ review }) => {
  return (
    <Flex>
      <Box mr="3">
        <UserPreviewAvatar user={review.user} />
      </Box>

      <Box pt="1">
        <Heading as="h6" size="xs">
          {review.user.username}
        </Heading>

        <Text fontSize="0.85rem" color="GrayText">
          {review.user.description}
        </Text>

        <Text mt="2" fontSize="0.9rem">
          {review.content}
        </Text>

        <Box mt="1">
          <ReviewUpvoteButton review={review} />

          <ReviewReplyButton />
        </Box>
      </Box>
    </Flex>
  )
}

export default ReviewListItem
