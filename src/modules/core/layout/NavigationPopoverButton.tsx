import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  Icon as ChakraIcon,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export type NavigationPopoverButtonProps = {
  text: string
  items: {
    text: string
    Icon: React.ComponentType<any>
    description: string
    to: string
  }[]
}

const NavigationPopoverButton: React.FC<NavigationPopoverButtonProps> = (props) => {
  const itemButtons = props.items.map(({ text, description, to, Icon }) => (
    <Link key={to} to={to}>
      <Flex
        align="center"
        py="1"
        px="4"
        color="gray.600"
        _hover={{ color: 'gray.900' }}
        _first={{ pt: 3 }}
        _last={{ pb: 3 }}
      >
        <Box mr="5">
          <ChakraIcon as={Icon} w={5} h={5} />
        </Box>

        <chakra.div flexGrow={1}>
          <Heading as="h5" size="sm">
            {text}
          </Heading>
          <Text color="GrayText" fontSize="sm">
            {description}
          </Text>
        </chakra.div>
      </Flex>
    </Link>
  ))

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Button variant="ghost" mr="1">
          {props.text}
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverBody p="0">{itemButtons}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default NavigationPopoverButton
