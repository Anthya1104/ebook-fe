import React from 'react'
import { Outlet } from 'react-router-dom'

function Bookshelf() {
  return (
    <>
      <div>Bookshelf Index</div>
      <Outlet />
    </>
  )
}

export default Bookshelf
