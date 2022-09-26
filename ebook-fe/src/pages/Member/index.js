import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import SideNavi from '../../img/navi_bar.svg'
import '../../style/MemberGlobal.scss'
import DecoBar from '../../img/deco_bar.png'
import Button from 'react-bootstrap/Button'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

function Member() {
  const sideNavContents = [
    {
      value: '訂單相關',
      url: '/Member/order',
    },
    {
      value: '會員資料修改',
      url: 'memberdata',
    },
    {
      value: '修改密碼',
      url: 'pw',
    },
    {
      value: '我的專屬書櫃',
      url: '/Member/bookshelf',
    },
    {
      value: '我的優惠券',
      url: '/Member/coupon',
    },
    {
      value: '我的里程碑',
      url: 'puzzle',
    },
    {
      value: '支付綁定',
      url: 'paymethod',
    },
    {
      value: '儲值',
      url: 'topUp',
    },
    {
      value: '常見問題',
      url: 'QA',
    },
    {
      value: '贈送紀錄',
      url: 'presentedRecord',
    },
    {
      value: '訊息通知紀錄',
      url: 'message',
    },
    {
      value: '登出',
      url: 'logout',
    },
  ]

  return (
    <>
      <div className="d-flex justify-content-left my-3">
        <div className="Member-side-nav d-flex-column align-items-center m-2 p-3">
          <h3 className="d-flex justify-content-center">會員專區</h3>
          <img alt="deco-bar" src={DecoBar} />
          {/* tabs */}
          <ul className="d-flex-column align-items-center">
            {sideNavContents.map((navContent, contentIndex) => {
              return (
                <>
                  <li className="my-2" key={sideNavContents.indexOf()}>
                    <Link to={sideNavContents[contentIndex].url}>
                      <Button className="btn btn-primary-reverse Member-nav-contents">
                        {sideNavContents[contentIndex].value}
                      </Button>
                    </Link>
                  </li>
                </>
              )
            })}
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Member
