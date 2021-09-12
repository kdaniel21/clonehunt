import { Box } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/react'
import BorderedBox from '../../../core/components/BorderedBox'
import ProductSubHeading from '../ProductSubHeading'
import FollowDiscussionButton from './FollowDiscussionButton'
import ReviewsList from './ReviewsList'

const ProductReviews: React.FC = () => {
  return (
    <Box mt="4">
      <Flex justifyContent="space-between" mb="4">
        <ProductSubHeading>Discussion</ProductSubHeading>

        <FollowDiscussionButton />
      </Flex>

      <BorderedBox p="3">
        creation placeholder
        <ReviewsList />
      </BorderedBox>
    </Box>
  )
}

export default ProductReviews
