import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import '../../../style/Bookshelf.scss'
// auth
import { useAuth } from '../../../Context/auth'
function Bookshelf() {
  const { member, setMember } = useAuth()
  if (!member) {
    return (
      <>
        <Navigate to="/Login" />
      </>
    )
  }
  return (
    <>
      {/* <div>Bookshelf Index</div> */}
      <Outlet />
    </>
  )
}

export default Bookshelf
