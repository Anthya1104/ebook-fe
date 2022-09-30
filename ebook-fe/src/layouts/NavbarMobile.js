import React, { useState, useEffect } from 'react'
import '../style/Navbar.scss'
import { NavLink, Link } from 'react-router-dom'

// axios
import axios from 'axios'
import { API_URL } from '../utils/config'

// useAuth
import { useAuth } from '../Context/auth'

import EbookLogo from '../pages/memberindexcategory/EK-logo-final-2.png'

function NavbarMobile() {
  const { member, setMember } = useAuth()
  const [onNav, setOnNav] = useState(false)

  // logout
  const logoutHandler = async () => {
    let response = await axios.get(`${API_URL}/auth/logout`, {
      withCredentials: true,
    })
    setMember(null)
  }
  return (
    <>
      <div className="navbar-mobile">
        {onNav ? (
          <div
            className="Navbar-hamburger-active"
            onClick={() => {
              setOnNav(false)
            }}
          >
            <div className="Navbar-hamburger-items"></div>
            <div className="Navbar-hamburger-items-flip"></div>
          </div>
        ) : (
          <div
            className="Navbar-hamburger"
            onClick={() => {
              setOnNav(true)
            }}
          >
            <div className="Navbar-hamburger-items"></div>
            <div className="Navbar-hamburger-items"></div>
            <div className="Navbar-hamburger-items"></div>
          </div>
        )}

        <div className="Navbar-logo-mobile d-flex p-2 align-items-center justify-content-center">
          <Link to="/">
            <img className="cover-fit" alt="ebk-logo" src={EbookLogo} />
          </Link>
        </div>
        <div>
          <svg
            width="36"
            height="36"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8231 13.9309L10.5158 9.62055C11.365 8.60219 11.8757 7.30079 11.8757 5.8794C11.8757 2.63665 9.21444 0 5.94093 0C2.66742 0 0 2.63973 0 5.88247C0 9.12522 2.66127 11.7619 5.93478 11.7619C7.3254 11.7619 8.60527 11.285 9.62055 10.4882L13.9432 14.8108C14.1955 15.0631 14.5708 15.0631 14.8231 14.8108C15.0754 14.5585 15.0754 14.1832 14.8231 13.9309ZM1.26141 5.88247C1.26141 3.33504 3.35966 1.26449 5.93478 1.26449C8.5099 1.26449 10.6081 3.33504 10.6081 5.88247C10.6081 8.4299 8.5099 10.5005 5.93478 10.5005C3.35966 10.5005 1.26141 8.42683 1.26141 5.88247Z"
              fill="#D99282"
            />
          </svg>
        </div>
      </div>
      {onNav ? (
        <div className="Navbar-active">
          <div
            className="Navbar-hamburger-active"
            onClick={() => {
              setOnNav(false)
            }}
          >
            <div className="Navbar-hamburger-items"></div>
            <div className="Navbar-hamburger-items-flip"></div>
          </div>
          <ul>
            <NavLink to="/Login" style={{ textDecoration: 'none' }}>
              <li className="Navbar-login-area">登入/註冊</li>
            </NavLink>
            <NavLink to="/Cart/product-list" style={{ textDecoration: 'none' }}>
              <li>商城</li>
            </NavLink>
            <NavLink to="/Cart" style={{ textDecoration: 'none' }}>
              <li>購物車</li>
            </NavLink>
            <NavLink to="/Cart/WishList" style={{ textDecoration: 'none' }}>
              <li>願望清單</li>
            </NavLink>
            <NavLink to="/Member/bookshelf" style={{ textDecoration: 'none' }}>
              <li>我的書櫃</li>
            </NavLink>
            <NavLink to="/Member/order" style={{ textDecoration: 'none' }}>
              <li>我的訂單</li>
            </NavLink>
            <NavLink to="/Login" style={{ textDecoration: 'none' }}>
              <li>聊天室</li>
            </NavLink>
          </ul>
          <ul>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <li className="Navbar-logout">登出</li>
            </NavLink>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default NavbarMobile
