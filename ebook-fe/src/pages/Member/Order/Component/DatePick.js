import { useState } from 'react'

function DatePick() {
  const [date, setDate] = useState()

  console.log('Date', date)

  return (
    <div className="main mb-3">
      <div className="d-flex">
        <input type="date" onChange={(e) => setDate(e.target.value)} /> -{' '}
        <input type="date" onChange={(e) => setDate(e.target.value)} />
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
