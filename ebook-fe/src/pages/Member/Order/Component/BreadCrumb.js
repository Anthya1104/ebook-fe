import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'

function BreadCrumb() {
  return (
    <div>
      <Breadcrumb>
        <Link to="/Member">
          <Breadcrumb.Item>首頁</Breadcrumb.Item>
        </Link>
        <Link to="/Member/order">
          <Breadcrumb.Item>
            會員專區
          </Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item active>我的訂單</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
export default BreadCrumb
