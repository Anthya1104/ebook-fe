import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import '../pages/Memberindex.scss'
import MemberPic from './memberindexcategory/member.png'
import Bar from './memberindexcategory/decobar-2.png'
import BarDesktop from './memberindexcategory/decobar.png'
import Progressbar from './memberindexcategory/progress.jpg'
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
      <div className="container justify-context-center">
        <Card sx={{ maxWidth: 1067, height: 200 }} className="mt-5 ml-5">
          <div className="member-header d-flex ml-5 my-5 mb-3 d-flex">
            <img className="member-pic" src={MemberPic} alt="memberpic" />
            <div className="member-info">
              <ul className="member-information">
                <li className="member-information-1">
                  <p>會員姓名 : 王大明</p>
                </li>
                <li className="member-information-2">
                  <p>會員等級 : 銀卡</p>
                </li>
              </ul>
            </div>
            <div className="member-info">
              <ul className="member-information">
                <li className="member-information-3">
                  <p>會員帳號 : wangdaming</p>
                </li>
                <li className="member-information-4">
                  <p>加入會員日 : 2022/08/02 </p>
                </li>
              </ul>
            </div>
          </div>
          {/* 進度條 */}
          <div className="">
            <img className=" " src={Progressbar} alt="progressbar" />
          </div>
        </Card>

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
              <div className="btn product-category col m-3">
                <img className="member-icon" src={order} alt="" />

                <Link className="member-word" to="/Member/order">
                  <br />
                  訂單相關查詢{' '}
                </Link>
              </div>
              <li className="btn product-category  col m-3">
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
              <li className="btn product-category  col m-3">
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
              <li className="btn product-category  col m-3">
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
            </div>

            <div className="row justify-content-center member-category">
              <li className="btn product-category  col m-3">
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
              <li className="btn product-category  col m-3">
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
              <li className="btn product-category  col m-3">
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

              <li className="btn product-category  col m-3">
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
            </div>

            <div className="row justify-content-center member-category">
              <li className="btn product-category  col m-3">
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
              <li className="btn product-category  col m-3">
                <a className="member-word" href="#">
                  <img
                    className="member-icon"
                    src=
                  />
                  <br />
                  贈送紀錄{' '}
                </a>
              </li>
              <li className="btn product-category  col m-3">
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
              <li className="btn product-category  col m-3">
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
