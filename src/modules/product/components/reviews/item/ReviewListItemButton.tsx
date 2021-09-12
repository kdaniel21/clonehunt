import { Button, ButtonProps } from '@chakra-ui/button'

const ReviewListItemButton: React.FC<ButtonProps> = (props) => (
  <Button variant="ghost" size="xs" {...props}>
    {props.children}
  </Button>
)

export default ReviewListItemButton
