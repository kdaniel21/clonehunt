import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import DailyProducts from '../modules/products/components/DailyProducts'

const ProductsPage: React.FC = () => {
  const date = new Date()
  date.setDate(date.getDate() - 1)

  const [renderedDays, setRenderedDays] = useState([new Date()])

  const addDays = () => {
    const lastRenderedDay = renderedDays[renderedDays.length - 1]

    const dayToAdd = new Date(lastRenderedDay)
    dayToAdd.setDate(lastRenderedDay.getDate() - 1)

    setRenderedDays([...renderedDays, dayToAdd])
  }

  return (
    <InfiniteScroll
      loadMore={addDays}
      hasMore={true}
      useWindow={false}
      getScrollParent={() => document.querySelector('main')}
    >
      {renderedDays.map((day) => (
        <DailyProducts key={day.getTime()} day={day}></DailyProducts>
      ))}
    </InfiniteScroll>
  )
}

export default ProductsPage
