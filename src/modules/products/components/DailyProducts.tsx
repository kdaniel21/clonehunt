import { Box, Button, chakra, Flex, Heading, Icon, Spinner } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import ProductListItem from './ProductListItem'
import { useGetProductsQuery } from '../../../generated/graphql'
import { DateUtils } from '../../core/utils/date-utils'
import { useRef } from 'react'
import NoProductsMessage from './NoProductsMessage'
import BorderedBox from '../../core/components/BorderedBox'

interface DailyProductsProps {
  day: Date
}

const PAGE_SIZE = 5

const DailyProducts: React.FC<DailyProductsProps> = ({ day }) => {
  const startDate = DateUtils.removeTime(day)
  const endDate = DateUtils.removeTime(DateUtils.addDays(day, 1))

  const lastCursor = useRef<string>()

  // TODO: Add error handling
  const {
    data,
    loading: isLoading,
    fetchMore,
  } = useGetProductsQuery({
    variables: { first: PAGE_SIZE, after: lastCursor.current, startDate, endDate },
    onCompleted: (data) => (lastCursor.current = data.products.pageInfo.endCursor),
  })

  const handleShowMore = () =>
    fetchMore({ variables: { first: PAGE_SIZE, after: lastCursor.current, startDate, endDate } })

  const products = data?.products.edges.map((edge) => <ProductListItem key={edge.node.id} product={edge.node} />)
  const numOfElementsToLoad = data?.products.totalCount - data?.products.edges.length

  const { hasNextPage = false } = data?.products?.pageInfo || {}
  return (
    <chakra.div maxW="600px" mx="auto" mb="8">
      <Flex justifyContent="space-between" mb="2">
        <Heading size="md">{day.toLocaleDateString('en', { weekday: 'long' })}</Heading>

        <Flex>
          <Button size="xs" variant="unstyled">
            Popular
          </Button>
          <chakra.span mx="2">|</chakra.span>
          <Button size="xs" variant="unstyled">
            Newest
          </Button>
        </Flex>
      </Flex>

      <BorderedBox>
        {isLoading && (
          <Box textAlign="center" py="3">
            <Spinner />
          </Box>
        )}

        {!products?.length && !isLoading ? <NoProductsMessage day={day} /> : products}

        {hasNextPage && (
          <Button isFullWidth={true} size="sm" leftIcon={<Icon as={FaChevronDown} />} onClick={handleShowMore}>
            Show {numOfElementsToLoad} more
          </Button>
        )}
      </BorderedBox>
    </chakra.div>
  )
}

export default DailyProducts
