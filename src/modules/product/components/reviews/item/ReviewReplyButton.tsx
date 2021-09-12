import { Collapse } from '@chakra-ui/react'
import ReviewListItemButton from './ReviewListItemButton'

const ReviewReplyButton: React.FC = () => {
  return (
    <>
      <ReviewListItemButton>Reply</ReviewListItemButton>
      <Collapse></Collapse>
    </>
  )
}

export default ReviewReplyButton
