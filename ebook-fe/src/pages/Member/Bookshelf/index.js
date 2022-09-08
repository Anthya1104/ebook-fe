import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../../style/Bookshelf.scss'
function Bookshelf() {
  return (
    <>
      {/* <div>Bookshelf Index</div> */}
      <Outlet />
    </>
  )
}

export default Bookshelf
