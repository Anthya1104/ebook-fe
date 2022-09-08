import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavi from '../../img/navi_bar.svg'

function Member() {
  return (
    <>
      <div>Member</div>
      <div className="d-flex justify-content-left m-2">
        <div>
          <img alt="test-sidenavi" src={SideNavi} />
        </div>
        <Outlet />{' '}
      </div>
    </>
  )
}

export default Member
