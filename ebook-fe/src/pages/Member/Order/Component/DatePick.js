import { useState } from 'react'

function DatePick() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  // console.log('Date', date)

  return (
    <div className="main mb-3">
      <div className="d-flex">
        <input
          type="date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <span className="m-1">-</span>
        <input
          type="date"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        <div>
          <a href="#" className="btn btn-primary ms-2">
            搜尋
          </a>
        </div>
      </div>
    </div>
  )
}
export default DatePick
