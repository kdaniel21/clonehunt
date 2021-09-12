import { Button, chakra, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import UpvoteButton, { UpvoteButtonContext } from '../../../products/components/UpvoteButton'
import ProductContext from '../../ProductContext'

const ProductUpvoteButton: React.FC = () => {
  const { product } = useContext(ProductContext)

  const buttonText = product.isUpvotedByCurrentUser ? 'Upvoted' : 'Upvote'

  return (
    <UpvoteButton product={product}>
      <UpvoteButtonContext.Consumer>
        {({ handleClick }) => (
          <Button
            textTransform="uppercase"
            colorScheme="orange"
            variant={product.isUpvotedByCurrentUser ? 'outline' : 'solid'}
            leftIcon={<FaChevronUp />}
            onClick={handleClick}
          >
            <Text mr="2">{buttonText}</Text>

            {product.upvoteCount}
          </Button>
        )}
      </UpvoteButtonContext.Consumer>
    </UpvoteButton>
  )
}

export default ProductUpvoteButton
