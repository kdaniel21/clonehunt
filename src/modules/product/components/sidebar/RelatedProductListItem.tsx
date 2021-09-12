import { Flex, Heading } from '@chakra-ui/layout'
import { RelatedProduct } from './RelatedProductsList'
import { Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface RelatedProductListItemProps {
  product: RelatedProduct
}

const RelatedProductListItem: React.FC<RelatedProductListItemProps> = ({ product }) => (
  <Link to={`/p/${product.id}`}>
    <Flex my="3" height="16">
      <Image alt={`${product.name} logo`} title={product.name} height="16" src={product.imageUrl} mr="2" />

      <Flex direction="column">
        <Heading as="h6" size="xs" py="1">
          {product.name}
        </Heading>
        <Text color="GrayText" flexGrow={1} fontSize="0.8rem" overflow="hidden" textOverflow="ellipsis">
          {product.description}
        </Text>
      </Flex>
    </Flex>
  </Link>
)

export default RelatedProductListItem
