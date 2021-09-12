import { Box } from '@chakra-ui/react'
import { Product } from '../../ProductContext'
import ProductSubHeading from '../ProductSubHeading'
import RelatedProductListItem from './RelatedProductListItem'

export type RelatedProduct = Pick<Product, 'id' | 'name' | 'description'> & { imageUrl: string }

const imageUrl =
  'https://ph-files.imgix.net/c7731309-00e3-4e9a-a9ab-d2a754ae6e9f.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop&dpr=1'
const relatedProducts: RelatedProduct[] = [
  {
    id: 'foo',
    name: 'Google Workspace',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor. ',
    imageUrl,
  },
  {
    id: 'foo',
    name: 'Google Workspace',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor. ',
    imageUrl,
  },
  {
    id: 'foo',
    name: 'Google Workspace',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor. fjkwfjdwjfwjfjwjwkdkwdkwkdwkdkwdkwkdkwdkwkdkwdk ',
    imageUrl,
  },
  {
    id: 'foo',
    name: 'Google Workspace',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor. ',
    imageUrl,
  },
  {
    id: 'foo',
    name: 'Google Workspace',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor. ',
    imageUrl,
  },
  {
    id: 'foo',
    name: 'Google Workspace',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor. ',
    imageUrl,
  },
]

const RelatedProductsList: React.FC = () => {
  return (
    <Box>
      <ProductSubHeading>Related products</ProductSubHeading>

      {relatedProducts.map((product) => (
        <RelatedProductListItem product={product} />
      ))}
    </Box>
  )
}

export default RelatedProductsList
