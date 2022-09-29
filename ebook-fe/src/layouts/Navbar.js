import '../style/Navbar.scss'
import { NavLink } from 'react-router-dom'
import Login from '../pages/memberindexcategory/478.png'
import Favoritelist from '../pages/memberindexcategory/heart.png'
import Shoppingcart from '../pages/memberindexcategory/shopping-cart.png'
import Search from '../pages/memberindexcategory/search.png'
import EbookLogo from '../pages/memberindexcategory/EK-logo-final-2.png'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="d-flex p-2 align-items-center menu-1">
          <NavLink to="/">
            <img className="ebooklogo" src={EbookLogo} alt="ebooklogo" />
          </NavLink>

          <NavLink className="menu-home" to="/">
            <h4 className="menu-home mx-4">首頁</h4>
          </NavLink>

          <h6 className="navbar-separate">|</h6>

          <div className="menu d-flex justify-content-start align-items-center mx-2">
            <NavLink className="menu-list mx-4" to="/Cart/product-list">
              商品分類
            </NavLink>

            <h6 className="navbar-separate">|</h6>

            <NavLink className="menu-list mx-4" to="/member-index">
              會員專區
            </NavLink>

            <h6 className="navbar-separate">|</h6>

            {/* <NavLink className="menu-list mx-4" to="/Chat">
              聊天室
            </NavLink> */}
            <a
              className="mx-4 text-decoration-none"
              href="http://localhost:3000/chats"
            >
              聊天室
            </a>
            {/* 
            <NavLink className="menu-list mx-1" to="/Materials">
              Material Reference
            </NavLink> */}

            {/* <NavLink className="menu-list mx-1" to="/Preview">
              Preview
            </NavLink> */}
          </div>

          <div className="menu-2 align-items-center justify-content-end d-flex">
            {/* <NavLink className="mx-2" to="/Preview">
              <img className="navbar-search" src={Search} alt="search" />
            </NavLink> */}

            <div class="searchBox">
              <input
                className="searchInput"
                type="text"
                name=""
                placeholder="搜尋"
              ></input>
              <div className="searchButton" href="#">
                <img className="navbar-search" src={Search} alt="search" />
                {/* <div>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8231 13.9309L10.5158 9.62055C11.365 8.60219 11.8757 7.30079 11.8757 5.8794C11.8757 2.63665 9.21444 0 5.94093 0C2.66742 0 0 2.63973 0 5.88247C0 9.12522 2.66127 11.7619 5.93478 11.7619C7.3254 11.7619 8.60527 11.285 9.62055 10.4882L13.9432 14.8108C14.1955 15.0631 14.5708 15.0631 14.8231 14.8108C15.0754 14.5585 15.0754 14.1832 14.8231 13.9309ZM1.26141 5.88247C1.26141 3.33504 3.35966 1.26449 5.93478 1.26449C8.5099 1.26449 10.6081 3.33504 10.6081 5.88247C10.6081 8.4299 8.5099 10.5005 5.93478 10.5005C3.35966 10.5005 1.26141 8.42683 1.26141 5.88247Z"
                      fill="#F5F5F5"
                    />
                  </svg>
                </div> */}
              </div>
            </div>

            <div className="menu-2-2">
              <NavLink
                className="menu-2-icon mx-2"
                activeClassName="selected"
                to="/Login"
              >
                <img className="navbar-login" src={Login} alt="Login" />
                {/* <p className="">Login</p> */}
              </NavLink>

              <NavLink className="menu-2-icon mx-2" to="/Cart/WishList">
                <img
                  className="navbar-favoritelist"
                  src={Favoritelist}
                  alt="Favoritelist"
                />
              </NavLink>

              <NavLink className="menu-2-icon mx-2" to="/Cart">
                <img
                  className="navbar-shoppingcart"
                  src={Shoppingcart}
                  alt="shoppingcart"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
