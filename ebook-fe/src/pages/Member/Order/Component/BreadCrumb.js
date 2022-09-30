import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'

function BreadCrumb() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="http://localhost:3005">
          <Link to="/"></Link>首頁
        </Breadcrumb.Item>
        <Breadcrumb.Item href="http://localhost:3005/member-index">
        <Link to="/member-index"></Link>會員專區
        </Breadcrumb.Item>
        <Breadcrumb.Item active>我的訂單</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
export default BreadCrumb
