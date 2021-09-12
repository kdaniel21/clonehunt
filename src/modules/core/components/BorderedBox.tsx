import { Box } from '@chakra-ui/react'

type BorderedBoxProps = { children: React.ReactNode } & { [stylingProperty: string]: any }

const BorderedBox: React.FC<BorderedBoxProps> = ({ children, ...stylingProps }) => (
  <Box {...stylingProps} border="1px solid #d9e1ec" borderRadius="5px">
    {children}
  </Box>
)

export default BorderedBox
