import { Button } from '@chakra-ui/button'
import { Tooltip } from '@chakra-ui/react'
import { FaQuestionCircle } from 'react-icons/fa'

const FollowDiscussionButton: React.FC = () => {
  // TODO: Implement functionality

  return (
    <Tooltip label="Get notified of new comments." aria-label="follow-discussion-tooltip" placement="top">
      <Button textTransform="uppercase" size="sm" variant="link" colorScheme="blue" rightIcon={<FaQuestionCircle />}>
        Follow discussion
      </Button>
    </Tooltip>
  )
}

export default FollowDiscussionButton
