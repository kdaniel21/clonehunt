import { createContext } from 'react'
import { GetProductQuery, useGetProductQuery } from '../../generated/graphql'
import UserContext from '../auth/UserContext'

export type Product = GetProductQuery['product']

interface ProductContextValue {
  product: Product
  isLoading: boolean
}

const ProductContext = createContext<ProductContextValue>({ product: undefined, isLoading: false })

interface ProductProviderProps {
  productId: string
  children: React.ReactNode
}
export const ProductProvider: React.FC<ProductProviderProps> = ({ productId, children }) => {
  const { data, loading: isLoading } = useGetProductQuery({ variables: { id: productId } })
  const product: Product = !!data?.product && { ...data.product, createdAt: new Date(data.product?.createdAt) }

  return <ProductContext.Provider value={{ product, isLoading }}>{!isLoading && children}</ProductContext.Provider>
}

export const ProductConsumer = UserContext.Consumer

export default ProductContext
