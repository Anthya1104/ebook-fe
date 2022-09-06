import { useState } from 'react'

function DatePick() {
  const [date, setDate] = useState()

  console.log('Date', date)

  return (
    <div className="main">
      <input type="date" onChange={(e) => setDate(e.target.value)} /> -{' '}
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <div className="justify-content-center">
        <a href="#" className="btn btn-primary ">
          搜尋
        </a>
      </div>
    </div>
  )
}
export default DatePick
