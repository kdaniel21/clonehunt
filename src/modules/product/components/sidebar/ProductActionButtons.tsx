import { Button, Flex, Link } from '@chakra-ui/react'
import { useContext } from 'react'
import ProductContext from '../../ProductContext'
import ProductUpvoteButton from '../sidebar/ProductUpvoteButton'

const ProductActionButtons: React.FC = () => {
  const { product } = useContext(ProductContext)

  return (
    <>
      <Flex>
        <Link href={product.url} target="_blank">
          <Button textTransform="uppercase" variant="outline" mr="2">
            Get it
          </Button>
        </Link>

        <ProductUpvoteButton />
      </Flex>
    </>
  )
}

export default ProductActionButtons
