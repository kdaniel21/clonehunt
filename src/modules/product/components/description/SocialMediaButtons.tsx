import { Button, HStack } from '@chakra-ui/react'
import { FaBookmark, FaCode, FaFacebook, FaTwitter } from 'react-icons/fa'

const SocialMediaButtons: React.FC = () => (
  <HStack mt="3">
    <Button variant="outline" colorScheme="twitter" leftIcon={<FaTwitter />} size="sm">
      Twitter
    </Button>

    <Button variant="outline" colorScheme="facebook" leftIcon={<FaFacebook />} size="sm">
      Facebook
    </Button>

    <Button variant="outline" leftIcon={<FaCode />} size="sm">
      Embed
    </Button>

    <Button variant="outline" leftIcon={<FaBookmark />} size="sm">
      Collect
    </Button>
  </HStack>
)

export default SocialMediaButtons
