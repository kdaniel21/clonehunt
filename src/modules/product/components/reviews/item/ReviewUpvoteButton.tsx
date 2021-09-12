import { FaChevronUp } from 'react-icons/fa'
import ReviewListItemButton from './ReviewListItemButton'
import { Review } from './ReviewListItem'

interface UpvoteReviewButtonProps {
  review: Pick<Review, 'id' | 'upvoteCount'>
}

const ReviewUpvoteButton: React.FC<UpvoteReviewButtonProps> = ({ review }) => {
  // TODO: Implement logic

  return <ReviewListItemButton leftIcon={<FaChevronUp />}>Upvote ({review.upvoteCount})</ReviewListItemButton>
}

export default ReviewUpvoteButton
