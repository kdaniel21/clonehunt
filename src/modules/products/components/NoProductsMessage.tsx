import { Box, Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { DateUtils } from '../../core/utils/date-utils'

interface NoProductsMessageProps {
  day: Date
}

const NoProductsMessage: React.FC<NoProductsMessageProps> = ({ day }) => {
  const todayMessage = (
    <>
      We haven't got any products yet. Why don't you{' '}
      <Link to="/submit">
        <Button colorScheme="orange" variant="link">
          submit one
        </Button>
      </Link>
      ?
    </>
  )
  const isToday = DateUtils.isToday(day)

  return (
    <Box p="5" textAlign="center">
      <Heading as="h5" size="sm" color="gray.600">
        {isToday ? todayMessage : `We don't have any products for this day.`}
      </Heading>
    </Box>
  )
}

export default NoProductsMessage
