import { SearchIcon } from '@chakra-ui/icons'
import { chakra, Flex, HStack, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { FaBoxOpen, FaEye, FaTag, FaTaxi, FaMicrophoneAlt, FaPenNib, FaHeart, FaUsers, FaShip } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UserConsumer } from '../../auth/UserContext'
import GuestHeader from './GuestHeader'
import Logo from './Logo'
import NavigationButton from './NavigationButton'
import NavigationPopoverButton, { NavigationPopoverButtonProps } from './NavigationPopoverButton'
import UserHeader from './UserHeader'

const navigationItems: NavigationPopoverButtonProps[] = [
  {
    text: 'Products',
    items: [
      {
        text: 'Topics',
        description: 'Browse through topics that interest you.',
        Icon: FaBoxOpen,
        to: '/topics',
      },
      {
        text: 'Upcoming products',
        description: 'See what Makers are currently building.',
        Icon: FaEye,
        to: '/upcoming',
      },
      {
        text: 'Collections',
        description: 'Products curated by the community.',
        Icon: FaTag,
        to: '/collections',
      },
      {
        text: 'Time Travel',
        description: 'Most loved products by the community.',
        Icon: FaTaxi,
        to: '/time-travel',
      },
    ],
  },
  {
    text: 'Community',
    items: [
      {
        text: 'Discussions',
        description: 'Ask questions, find support and connect.',
        Icon: FaMicrophoneAlt,
        to: '/discussions',
      },
      {
        text: 'Stories',
        description: 'Tech stories, interviews and tips from Makers.',
        Icon: FaPenNib,
        to: '/stories',
      },
      {
        text: 'Makers Grant',
        description: 'Giving back and supporting the community',
        Icon: FaHeart,
        to: '/grant',
      },
    ],
  },
  {
    text: 'Tools',
    items: [
      {
        text: 'Founder Club',
        description: 'Amazing deals to kickstart your startup.',
        Icon: FaUsers,
        to: '/founders-club',
      },
      {
        text: 'Ship',
        description: 'The toolkit for Makers.',
        Icon: FaShip,
        to: '/ship',
      },
    ],
  },
]

const Header: React.FC = () => {
  const navigationButtons = navigationItems.map((item) => (
    <NavigationPopoverButton key={item.text} text={item.text} items={item.items} />
  ))

  return (
    <chakra.header
      flexShrink={0}
      overflowY="hidden"
      w="full"
      borderTopColor="brand.400"
      borderTop="6px solid"
      bg="white"
      boxShadow="0 0 1px 1px rgba(33,41,63,.1)"
    >
      <chakra.div h="4.5rem" mx="2rem">
        <Flex w="full" h="full" px="6" align="center" justify="space-between">
          <Flex align="center">
            <chakra.div mr="2rem">
              <Link to="/">
                <HStack>
                  <Logo />
                </HStack>
              </Link>
            </chakra.div>

            <chakra.div mr="1rem">
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300">
                  <SearchIcon></SearchIcon>
                </InputLeftElement>
                <Input variant="filled" placeholder="Search Clone Hunt" />
              </InputGroup>
            </chakra.div>

            <chakra.div>
              {navigationButtons}

              <NavigationButton text="Jobs" to="/jobs" />
              <NavigationButton text="About" to="/about" />
            </chakra.div>
          </Flex>

          <Flex flexGrow={1} alignItems="center" justify="flex-end">
            <UserConsumer>
              {({ user, isLoading }) => (user || isLoading ? <UserHeader /> : <GuestHeader />)}
            </UserConsumer>
          </Flex>
        </Flex>
      </chakra.div>
    </chakra.header>
  )
}

export default Header
