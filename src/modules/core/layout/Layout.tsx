import { chakra, Flex } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Flex pos="relative" direction="column" height="100vh" width="100vw">
      <Header />

      <chakra.main flexGrow={1} overflowY="auto" width="full" pt="8" pb="4">
        <chakra.div maxW="1366px" width="full" mx="auto">
          {props.children}
        </chakra.div>
      </chakra.main>
    </Flex>
  )
}

export default Layout
