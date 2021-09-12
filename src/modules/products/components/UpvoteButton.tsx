import { Button, chakra, Icon } from '@chakra-ui/react'
import { createContext } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { Product, useRemoveProductUpvoteMutation, useUpvoteProductMutation } from '../../../generated/graphql'

interface UpvoteButtonProps {
  product: Pick<Product, 'id' | 'upvoteCount' | 'isUpvotedByCurrentUser'>
  children?: React.ReactNode
}

interface UpvoteButtonContextValue {
  handleClick: () => void
}

export const UpvoteButtonContext = createContext<UpvoteButtonContextValue>({ handleClick: () => {} })

const UpvoteButton: React.FC<UpvoteButtonProps> = ({ product, children }) => {
  const [upvote] = useUpvoteProductMutation({
    variables: { id: product.id },
    optimisticResponse: { upvoteProduct: { upvoteCount: product.upvoteCount + 1, isUpvotedByCurrentUser: true } },
    update: (cache, mutationResult) => {
      const { isUpvotedByCurrentUser, upvoteCount } = mutationResult.data.upvoteProduct

      const productCacheIdentifier = cache.identify(product)
      cache.modify({
        id: productCacheIdentifier,
        fields: {
          upvoteCount: () => upvoteCount,
          isUpvotedByCurrentUser: () => isUpvotedByCurrentUser,
        },
      })
    },
  })
  const [removeUpvote] = useRemoveProductUpvoteMutation({
    variables: { id: product.id },
    optimisticResponse: {
      removeProductUpvote: { upvoteCount: product.upvoteCount - 1, isUpvotedByCurrentUser: false },
    },
    update: (cache, mutationResult) => {
      const updatedProduct = mutationResult.data.removeProductUpvote

      const productCacheIdentifier = cache.identify(product)
      cache.modify({
        id: productCacheIdentifier,
        fields: {
          upvoteCount: () => updatedProduct.upvoteCount,
          isUpvotedByCurrentUser: () => false,
        },
      })
    },
  })

  const handleClick = () => (product.isUpvotedByCurrentUser ? removeUpvote() : upvote())

  return (
    <UpvoteButtonContext.Provider value={{ handleClick }}>
      {children || (
        <Button
          variant="outline"
          h="full"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mb="1"
          colorScheme={product.isUpvotedByCurrentUser ? 'orange' : 'gray'}
          leftIcon={<FaChevronUp />}
          onClick={handleClick}
        >
          {product.upvoteCount}
        </Button>
      )}
    </UpvoteButtonContext.Provider>
  )
}

export default UpvoteButton
