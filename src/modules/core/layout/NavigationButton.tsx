import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

type NavigationButtonProps = {
  text: string
  to: string
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ text, to }) => {
  return (
    <Link to={to}>
      <Button variant="ghost" mr="1">
        {text}
      </Button>
    </Link>
  )
}

export default NavigationButton
