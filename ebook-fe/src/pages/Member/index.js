import React from 'react'
import { Outlet } from 'react-router-dom'

function Member() {
  return (
    <>
      <div>Member</div>
      <Outlet />
    </>
  )
}

export default Member
