<<<<<<< HEAD
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
=======
function DatePick(){
    const [date, setDate]=useState();

    console.log
}

<div className="main">
        <h1>Selected Date : {date}</h1>
        <input type="date" onChange={e->setDate(e.target.value)}/>
      </div>
>>>>>>> c33b7c80e022a16e5d49dc34799b4a7d18d9051f
