import { Heading } from '@chakra-ui/layout'

const ProductSubHeading: React.FC = ({ children }) => (
  <Heading as="h6" size="sm" color="GrayText" textTransform="uppercase">
    {children}
  </Heading>
)

export default ProductSubHeading
