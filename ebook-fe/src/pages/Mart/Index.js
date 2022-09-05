import React from 'react'
import { Outlet } from 'react-router-dom'

function Mart() {
  return (
    <>
      <h1>This is Mart Page</h1>
      <Outlet />
    </>
  )
}

export default Mart
