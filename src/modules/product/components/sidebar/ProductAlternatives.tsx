import Icon from '@chakra-ui/icon'
import { useContext } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ProductContext from '../../ProductContext'
import ProductSubHeading from '../ProductSubHeading'

const ProductAlternatives: React.FC = () => {
  const { product } = useContext(ProductContext)

  return (
    <Link to={`/alternatives/${product.id}`}>
      <ProductSubHeading>
        {product.name} alternatives <Icon as={FaLongArrowAltRight} ml="1" />
      </ProductSubHeading>
    </Link>
  )
}

export default ProductAlternatives
