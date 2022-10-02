import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import '../pages/Memberindex.scss'
import MemberPic from './memberindexcategory/member.png'
import Bar from './memberindexcategory/decobar-2.png'
import BarDesktop from './memberindexcategory/decobar.png'
import Progressbar from './memberindexcategory/progress.png'
import Card from '@mui/material/Card'
import { useAuth } from '../Context/auth'
import order from '../img/order.svg'

function MemberIndex() {
  const { member, setMember } = useAuth()
  // if (!member) {
  //   return (
  //     <>
  //       <Navigate to="/Login" />
  //     </>
  //   )
  // }
  return (
    <>
      <div className="container">
        <Card sx={{ maxWidth: 1250, height: 225 }} className="mt-5 member-card">
          <div className="row mt-4">
            <div className="col mt-2 member-header">
              <img className="member-pic" src={MemberPic} alt="memberpic" />
            </div>
            <div className="col member-info">
              <p>會員姓名 : 王大明</p>
              <p>會員帳號 : wangdaming</p>
            </div>
            <div className="col member-info">
              <p>會員等級 : 銀卡</p>
              <p>加入會員日 : 2022/08/02</p>
            </div>

            {/* 進度條 */}
            <div className="Member-progress-bar">
              <img className="" src={Progressbar} alt="progressbar" />
            </div>
          </div>
        </Card>

        {/* 裝飾bar */}
        <div className="member-bar-desktop">
          <img src={BarDesktop} className="bar" alt="bar" />
        </div>
        <div className="member-bar">
          <img src={Bar} alt="bar" />
        </div>

        <div className="member-container">
          <div className="row justify-content-center align-items-center member-category">
            <div className="btn product-category col m-3">
              <Link className="member-word" to="/Member/order">
                <img className="member-icon" src={order} alt="" />
                <br />
                訂單相關查詢
              </Link>
            </div>
            <div className="btn product-category  col m-3">
              <a className="member-word" href="#">
                <img
                  className="member-icon"
                  src={require('../pages/memberindexcategory/memberedit.png')}
                  alt=""
                />
                <br />
                會員資料修改{' '}
              </a>
            </div>
            <div className="btn product-category  col m-3">
              <a className="member-word" href="#">
                <img
                  className="member-icon"
                  src={require('../pages/memberindexcategory/pwchange.png')}
                  alt=""
                />
                <br />
                修改密碼{' '}
              </a>
            </div>
            <div className="btn product-category  col m-3">
              <Link className="member-word" to="/Member/bookshelf">
                <img
                  className="member-icon"
                  src={require('../pages/memberindexcategory/bookshelf.png')}
                  alt=""
                />
                <br />
                我的專屬書櫃{' '}
              </Link>
            </div>
            <div className="btn product-category col m-3">
              <Link className="member-word" to="/Member/coupon">
                <img
                  className="member-icon"
                  src={require('../pages/memberindexcategory/card.png')}
                  alt=""
                />
                <br />
                我的優惠券{' '}
              </Link>
            </div>
          </div>

          <div className="row justify-content-center align-items-center member-category">
            <div className="btn product-category  col m-3">
              <a className="member-word" href="#">
                <img
                  className="member-icon"
                  src={require('../pages/memberindexcategory/plan.png')}
                  alt=""
                />
                <br />
                我的里程碑{' '}
              </a>
            </div>
            <div className="btn product-category  col m-3">
              <a className="member-word" href="#">
                <img
                  className="member-icon"
                  src={require('../pages/memberindexcategory/pay.png')}
                  alt=""
                />
                <br />
                支付綁定{' '}
              </a>
            </div>
            <div className="btn product-category  col m-3">
              <a className="member-word" href="#">
                <img
                  className="member-icon"
                  src={require('../pages/memberindexcategory/inmoney.png')}
                  alt=""
                />
                <br />
                儲值{' '}
              </a>
            </div>
            <div className="btn product-category  col m-3">
              <a className="member-word" href="#">
                <img
                  className="member-icon"
                  src={require('../pages/memberindexcategory/Q&A.png')}
                  alt=""
                />
                <br />
                常見問題{' '}
              </a>
            </div>
            {/* <li className="btn product-category  col m-3">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/Q&A.png')}
                  />
                  <br />
                  贈送紀錄{' '}
                </a>
              </li> */}
            <div className="btn product-category  col m-3">
              <a className="member-word" href="#">
                <img
                  className="member-icon"
                  src={require('../pages/memberindexcategory/logout.png')}
                  alt=""
                />
                <br />
                登出{' '}
              </a>
            </div>
          </div>
          <div className="row justify-content-center member-category">
            {/* <li className="btn product-category  col m-3">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/notification.png')}
                    alt=""
                  />
                  <br />
                  訊息通知紀錄{' '}
                </a>
              </li> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberIndex
