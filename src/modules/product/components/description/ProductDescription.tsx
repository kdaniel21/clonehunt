import { chakra, Flex, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import BorderedBox from '../../../core/components/BorderedBox'
import { DateUtils } from '../../../core/utils/date-utils'
import ProductContext from '../../ProductContext'
import SocialMediaButtons from './SocialMediaButtons'

const ProductDescription: React.FC = () => {
  const { product } = useContext(ProductContext)

  return (
    <BorderedBox w="full" p="4">
      video & images placeholder
      <chakra.hr my="4" />
      <Text color="gray.700" mb="4">
        {product.description}
      </Text>
      <Flex justifyContent="space-between">
        <SocialMediaButtons />

        <BorderedBox px="2" py="1" mt="auto" color="gray.600" fontSize="0.80rem" textTransform="uppercase">
          Featured {DateUtils.formatRelative(product.createdAt)}
        </BorderedBox>
      </Flex>
    </BorderedBox>
  )
}

export default ProductDescription
