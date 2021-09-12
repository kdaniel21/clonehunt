import { Grid } from '@chakra-ui/layout'
import UserPreviewAvatar, { UserProfilePreview } from '../UserPreviewAvatar'

const ProductUpvoters: React.FC = () => {
  const upvoters = new Array<UserProfilePreview>(12).fill({
    id: 'foobar',
    username: 'foo',
    avatarUrl: 'https://i.pravatar.cc/50',
    pointsCount: 10,
    description: 'Lorem ipsum dolor sit amet.',
  })

  return (
    <Grid templateColumns="repeat(6, 1fr)" templateRows="repeat(2, 1fr)" rowGap="4" columnGap="1">
      {upvoters.map((user) => (
        <UserPreviewAvatar user={user} />
      ))}
    </Grid>
  )
}

export default ProductUpvoters
