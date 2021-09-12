import { Box, Button, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { useMemo } from 'react'
import { FaComment } from 'react-icons/fa'
import { GetProductsQuery } from '../../../generated/graphql'
import UpvoteButton from './UpvoteButton'
import { Link } from 'react-router-dom'

const url =
  'https://ph-files.imgix.net/c7731309-00e3-4e9a-a9ab-d2a754ae6e9f.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop&dpr=1'

interface ProductListItemProps {
  product: GetProductsQuery['products']['edges'][number]['node']
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const numOfComments = useMemo(() => Math.floor(Math.random() * (100 - +1)), [])

  return (
    <Flex p="4" justifyContent="space-between" h="7rem" borderBottom="1px solid lightgray">
      <Flex>
        <Image src={url} h="80px" w="80px" mr="3" />

        <Flex direction="column" justifyContent="space-between">
          <Box>
            <Link to={`/p/${product.id}`}>
              <Heading as="h5" size="sm">
                {product.name}
              </Heading>
            </Link>
            <Text color="GrayText">{product.description}</Text>
          </Box>

          <Flex alignItems="center">
            <Button variant="outline" size="xs" leftIcon={<Icon as={FaComment} />} mr="2">
              {numOfComments}
            </Button>
            <Text color="GrayText" display="inline" fontSize="0.85rem">
              Free | Travel
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <UpvoteButton product={product} />
    </Flex>
  )
}

export default ProductListItem
