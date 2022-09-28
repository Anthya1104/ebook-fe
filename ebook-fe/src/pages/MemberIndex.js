import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import '../pages/Memberindex.scss'
import MemberPic from './memberindexcategory/member.png'
import Bar from './memberindexcategory/裝飾bar-1 1.png'
// auth
import { useAuth } from '../Context/auth'

function MemberIndex() {
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
      <div className="container-xxl d-flex-column justify-context-center">
        <div className="member-header d-flex">
          <div className="">
            <img className="member-pic" src={MemberPic} alt="memberpic" />
          </div>

          <div className="">
            <ul className="member-information">
              <li className="">
                <a>會員姓名 : 王大明</a>
              </li>
              <li>
                <a>會員等級 : 銀卡</a>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="member-information">
              <li className="">
                <a>會員帳號 : wangdaming</a>
              </li>
              <li>
                <a>加入會員日 : 2022/08/02 </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="member-bar">
          <img className="bar" src={Bar} alt="bar" />
        </div>

        <div className="member-container">
          <ul className="d-flex row flex-wrap">
            <div className="row justify-content-center member-category">
              <li className="member-item col-4 m-5">
                <Link className="member-word" to="/Member/order">
                  <img
                    className="member-icon"
                    src={require('../pages/memberindexcategory/order.png')}
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
