import React, { useEffect } from 'react'
import BookCover from '../../../../img/book.jpg'
import ArrowRight from '../../../../img/recent_book_arrow_r.svg'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useState } from 'react'

// 動態資料連動方法 -> 使用
ChartJS.register(ArcElement, Tooltip, Legend)
let readProcess = 50
const newdata = {
  labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: [readProcess, 100 - readProcess],
      backgroundColor: ['rgb(102,31,30)', 'rgba(0, 0, 0, 0)'],
      cutout: 140,
      borderWidth: 0,
    },
  ],
}
console.log()
function RecentBook() {
  // 動態做法: https://www.youtube.com/watch?v=UwlaPofs5cA&ab_channel=SeemaHolidayDeveloper
  const [data, setData] = useState(newdata)
  // 用 useEffect 做動態改變
  useEffect(() => {
    // readProcess -> data.datasets[0].data[0]
    // console.log(data.datasets[0].data[0])
  }, [data])

  // 然後用 useEffect
  // useEffect(() => {
  //   let newProcess = 20
  //   // let updateData = [...data]
  // }, [data])
  return (
    <>
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <img className="img-flip m-2" alt="arrow-l" src={ArrowRight} />
          <div className="recent-book d-flex justify-content-center align-items-center">
            <div className="chartLocation">
              <Doughnut data={data} />
            </div>
          </div>
          <img className="m-2" alt="arrow-r" src={ArrowRight} />
        </div>
        <div className="recent-book-img p-1">
          <img className="contain-fit" alt="recent-book" src={BookCover} />
        </div>
      </div>
      <div>RecentBook</div>
    </>
  )
}

export default RecentBook
