import { Box, Grid } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ProductActionButtons from '../modules/product/components/sidebar/ProductActionButtons'
import ProductAlternatives from '../modules/product/components/sidebar/ProductAlternatives'
import ProductDescription from '../modules/product/components/description/ProductDescription'
import ProductHeader from '../modules/product/components/description/ProductHeader'
import ProductUpvoters from '../modules/product/components/sidebar/ProductUpvoters'
import RelatedProductsList from '../modules/product/components/sidebar/RelatedProductsList'
import TrendingProductsList from '../modules/product/components/sidebar/TrendingProductsList'
import { ProductProvider } from '../modules/product/ProductContext'
import ProductReviews from '../modules/product/components/reviews/ProductReviews'

interface ProductPageParams {
  id: string
}

const ProductPage: React.FC = () => {
  const { id: productId } = useParams<ProductPageParams>()

  return (
    <ProductProvider productId={productId}>
      <Box px="32">
        <ProductHeader />

        <Grid templateColumns="7fr 3fr" columnGap="4">
          <Box>
            <ProductDescription />

            <ProductReviews />
          </Box>

          <Grid gridRowGap={4}>
            <ProductActionButtons />

            <ProductUpvoters />

            <RelatedProductsList />

            <ProductAlternatives />

            <TrendingProductsList />
          </Grid>
        </Grid>
      </Box>
    </ProductProvider>
  )
}

export default ProductPage
