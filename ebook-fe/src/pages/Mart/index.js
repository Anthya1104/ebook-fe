import React from 'react'

import { Outlet } from 'react-router-dom'

function Mart() {
  return (
    <>
      <div className="container-xxl d-flex-column justify-context-center">
        <Outlet />
      </div>
    </>
  )
}

export default Mart
