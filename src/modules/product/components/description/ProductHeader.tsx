import { Box, Button, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { FaPercentage } from 'react-icons/fa'
import ProductContext from '../../ProductContext'

const imageUrl =
  'https://ph-files.imgix.net/c7731309-00e3-4e9a-a9ab-d2a754ae6e9f.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop&dpr=1'

const ProductHeader: React.FC = () => {
  const { product } = useContext(ProductContext)

  return (
    <Flex mb="7">
      <Box mr="6">
        <Image src={imageUrl}></Image>
      </Box>

      <Flex flexDirection="column" justifyContent="space-between">
        <Box mb="4  ">
          <Heading as="h1" size="lg">
            {product.name}
          </Heading>

          <Text color="gray.600">{product.description}</Text>
        </Box>

        <Button variant="outline" colorScheme="orange" leftIcon={<Icon as={FaPercentage} />} size="xs">
          Free options
        </Button>
      </Flex>
    </Flex>
  )
}

export default ProductHeader
