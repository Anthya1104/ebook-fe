import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import SideNavi from '../../img/navi_bar.svg'
import '../../style/MemberGlobal.scss'
import DecoBar from '../../img/deco_bar.png'
import Button from 'react-bootstrap/Button'

function Member() {
  const sideNavContents = [
    '訂單相關查詢',
    '會員資料修改',
    '修改密碼',
    '我的專屬書櫃',
    '我的優惠券',
    '我的里程碑',
    '支付綁定',
    '儲值',
    '常見問題',
    '贈送紀錄',
    '訊息通知紀錄',
    '登出',
  ]
  return (
    <>
      <div>Member</div>
      <div className="d-flex justify-content-left m-2">
        <div className="Member-side-nav d-flex-column align-items-center">
          <h3 className="d-flex justify-content-center">會員專區</h3>
          <img alt="deco-bar" src={DecoBar} />
          {/* tabs */}
          <ul>
            {sideNavContents.map((navContent) => {
              return (
                <>
                  <li className="my-2" key={navContent.indexOf()}>
                    <Button className="btn btn-primary-reverse Member-nav-contents">
                      {navContent}
                    </Button>
                  </li>
                </>
              )
            })}
          </ul>

          <img alt="test-sidenavi" src={SideNavi} />
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Member
