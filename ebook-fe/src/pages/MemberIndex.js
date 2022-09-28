import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import '../pages/Memberindex.scss'
import MemberPic from './memberindexcategory/member.png'
import Bar from './memberindexcategory/decobar-2.png'
import BarDesktop from './memberindexcategory/decobar.png'
import Progressbar from './memberindexcategory/progress.jpg'
// auth
import { useAuth } from '../Context/auth'

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
      <div className="container-xxl d-flex-column justify-context-center">
        <div className="member-header d-flex">
          <div className="">
            <img className="member-pic" src={MemberPic} alt="memberpic" />
          </div>

          <div className="member-info">
            <ul className="member-information">
              <li className="member-information-1">
                <a>會員姓名 : 王大明</a>
              </li>
              <li className="member-information-2">
                <a>會員等級 : 銀卡</a>
              </li>
            </ul>
          </div>

          <div className="member-info">
            <ul className="member-information">
              <li className="member-information-3">
                <a>會員帳號 : wangdaming</a>
              </li>
              <li className="member-information-4">
                <a>加入會員日 : 2022/08/02 </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 進度條 */}
        <div className="progress-bar">
          <img className="progressbar" src={Progressbar} alt="progressbar" />
        </div>

        {/* 裝飾bar */}
        
        <div className="member-bar-desktop">
          <img src={BarDesktop} alt="bar" />
        </div>
        <div className="member-bar">
          <img src={Bar} alt="bar" />
        </div>

        <div className="member-container">
          <ul className="d-flex row flex-wrap">
            <div className="row justify-content-center member-category">
              <li className="member-item col-4 m-5">
                <Link className="member-word" to="/Member/order">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/order.png')}
                    alt=""
                  />
                  <br />
                  訂單相關查詢{' '}
                </Link>
              </li>

              <li className="member-item col-4 m-5">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/memberedit.png')}
                    alt=""
                  />
                  <br />
                  會員資料修改{' '}
                </a>
              </li>

              <li className="member-item col-4 m-5">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/pwchange.png')}
                    alt=""
                  />
                  <br />
                  修改密碼{' '}
                </a>
              </li>
            </div>

            <div className="row justify-content-center member-category">
              <li className="member-item col-4 m-5">
                <Link className="member-word" to="/Member/bookshelf">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/bookshelf.png')}
                    alt=""
                  />
                  <br />
                  我的專屬書櫃{' '}
                </Link>
              </li>

              <li className="member-item col-4 m-5">
                <Link className="member-word" to="/Member/coupon">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/card.png')}
                    alt=""
                  />
                  <br />
                  我的優惠券{' '}
                </Link>
              </li>

              <li className="member-item col-4 m-5">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/plan.png')}
                    alt=""
                  />
                  <br />
                  我的里程碑{' '}
                </a>
              </li>
            </div>

            <div className="row justify-content-center member-category">
              <li className="member-item col-4 m-5">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/pay.png')}
                    alt=""
                  />
                  <br />
                  支付綁定{' '}
                </a>
              </li>

              <li className="member-item col-4 m-5">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/inmoney.png')}
                    alt=""
                  />
                  <br />
                  儲值{' '}
                </a>
              </li>

              <li className="member-item col-4 m-5">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/Q&A.png')}
                    alt=""
                  />
                  <br />
                  常見問題{' '}
                </a>
              </li>
            </div>

            <div className="row justify-content-center member-category">
              <li className="member-item col-4 m-5">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/gift.png')}
                    alt=""
                  />
                  <br />
                  贈送紀錄{' '}
                </a>
              </li>

              <li className="member-item col-4 m-5">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/notification.png')}
                    alt=""
                  />
                  <br />
                  訊息通知紀錄{' '}
                </a>
              </li>

              <li className="member-item col-4 m-5">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/logout.png')}
                    alt=""
                  />
                  <br />
                  登出{' '}
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MemberIndex
