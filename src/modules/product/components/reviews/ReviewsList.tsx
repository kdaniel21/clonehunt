import ReviewListItem, { Review } from './item/ReviewListItem'

const reviews: Review[] = [
  {
    id: 'foo',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet odio arcu. Mauris eu ultrices neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur eros quis turpis porttitor, non congue arcu congue. Fusce a diam non arcu eleifend lacinia. Mauris rhoncus, augue sit amet sagittis tristique, leo ligula semper mauris, vel sagittis ex est et odio. Nam sem turpis, venenatis eu nulla id, bibendum tincidunt odio. Vivamus elementum sit amet risus ut semper. Cras libero orci, hendrerit vel elementum eget, porta cursus ligula. Mauris dolor enim, luctus quis purus nec, blandit ultrices enim. Nullam commodo ligula velit, ut sagittis odio commodo vitae. Donec finibus egestas lacus quis feugiat. Fusce mattis dui sed ex viverra pulvinar vel vitae quam. Cras pulvinar lacus lacus, vel viverra libero aliquet scelerisque. Donec et odio nibh. ',
    createdAt: new Date('10/09/2021 17:00:00'),
    updatedAt: new Date('11/09/2021 12:32:53'),
    user: {
      id: 'foo',
      username: 'Jake',
      avatarUrl: 'https://i.pravatar.cc/100',
      pointsCount: 141,
      description: 'Random description',
    },
    upvoteCount: 10,
    children: [],
  },
]

const ReviewsList: React.FC = () => {
  return (
    <>
      {reviews.map((review) => (
        <ReviewListItem review={review} />
      ))}
    </>
  )
}

export default ReviewsList
