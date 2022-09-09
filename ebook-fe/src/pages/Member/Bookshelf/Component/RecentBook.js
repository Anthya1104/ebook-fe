import React, { useEffect } from 'react'
import BookCover from '../../../../img/book.jpg'
import ArrowRight from '../../../../img/recent_book_arrow_r.svg'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useState } from 'react'
import BtnPrimaryReverse from '../../../../Component/Buttons/BtnPrimaryReverse'

// 動態資料連動方法 -> 使用
ChartJS.register(ArcElement, Tooltip, Legend)
let readProcess = 40
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
  // Chart.js states
  // 動態做法: https://www.youtube.com/watch?v=UwlaPofs5cA&ab_channel=SeemaHolidayDeveloper
  const [data, setData] = useState(newdata)


  // Chart.js 動態改變
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
      <div className="position-relative m-5">
        <div className="d-flex justify-content-center align-items-center">
          <img className="img-flip m-2" alt="arrow-l" src={ArrowRight} />
          <div className="recent-book d-flex justify-content-center align-items-center">
            <div className="chartLocation">
              <Doughnut data={data} />
            </div>
          </div>
          <img className="m-2" alt="arrow-r" src={ArrowRight} />
        </div>
        <div className="position-absolute top-0 Bookshelf-recent-info">
          <h5>原子習慣：細微改變帶來巨大成就的實證法則</h5>
          <h6>詹姆斯‧克利爾</h6>
        </div>
        <div className="position-absolute bottom-0 Bookshelf-recent-info">
          <p>{readProcess + '%'}</p>
        </div>
        <div className="position-absolute top-0 d-flex align-items-center">
          <div className="recent-book-img p-1">
            <img className="contain-fit" alt="recent-book" src={BookCover} />
          </div>

          <div className="Bookshelf-recent-btn mx-3">
            {BtnPrimaryReverse('繼續閱讀')}
            {BtnPrimaryReverse('寫下評論')}
            {BtnPrimaryReverse('送給朋友')}
          </div>
        </div>
      </div>

      {/* <div>RecentBook</div> */}
    </>
  )
}

export default RecentBook
