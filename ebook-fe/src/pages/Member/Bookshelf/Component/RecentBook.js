import React from 'react'
import BookCover from '../../../../img/book.jpg'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import '../../../../style/global.scss'

// 動態資料連動方法 -> 使用
ChartJS.register(ArcElement, Tooltip, Legend)
let readProcess = 50
export const data = {
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
function RecentBook() {
  return (
    <>
      <div className="">
        <div className="recent-book d-flex justify-content-center align-items-center">
          <div className="chartLocation">
            <Doughnut data={data} />
          </div>
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
