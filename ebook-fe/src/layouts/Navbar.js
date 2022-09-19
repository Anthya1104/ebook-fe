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
      <div className="navbar justify-content-start">
        <div className="navbar-links d-flex p-2 align-items-center">
          <NavLink to="/">
            <img className="ebooklogo" src={EbookLogo} alt="ebooklogo" />
          </NavLink>

          <NavLink className="menu-home" to="/">
            <h4 className="menu-home mx-4">首頁</h4>
          </NavLink>

          <h6 className="navbar-separate">|</h6>

          <div className="menu d-flex justify-content-start align-items-center mx-2">

            <NavLink className="menu-list mx-4" to="/Mart">
              商品分類
            </NavLink>

            <h6 className="navbar-separate">|</h6>


            <NavLink className="menu-list mx-4" to="/member-index">
              會員專區
            </NavLink>

            <h6 className="navbar-separate">|</h6>

            <NavLink className="menu-list mx-4" to="/Chat">
              聊天室
            </NavLink>

            <h6 className="navbar-separate">|</h6>

            <NavLink className="menu-list mx-4" to="/">
              關於我們
            </NavLink>

            <NavLink className="menu-list mx-2" to="/Materials">
              Material Reference
            </NavLink>

            <NavLink className="menu-list mx-2" to="/Preview">
              Preview
            </NavLink>
          </div>

          <div className="menu-2 align-items-center justify-content-end d-flex">
            {/* <NavLink className="mx-2" to="/Preview">
              <img className="navbar-search" src={Search} alt="search" />
            </NavLink> */}
             

            <div class="searchBox">
              <input className="searchInput" type="text" name="" placeholder="搜尋"></input>
              <div className="searchButton" href="#">
                <img className="navbar-search" src={Search} alt="search" />
              </div>
            </div>

            <div className="menu-2-2">
              <NavLink className="menu-2-icon mx-2" activeClassName="selected" to="/Login">
                <img className="navbar-login" src={Login} alt="Login" />
                {/* <p className="">Login</p> */}
              </NavLink>

              <NavLink className="menu-2-icon mx-2" to="/Preview">
                <img className="navbar-favoritelist" src={Favoritelist} alt="Favoritelist" />
              </NavLink>

              <NavLink className="menu-2-icon mx-2" to="/Preview">
                <img className="navbar-shoppingcart" src={Shoppingcart} alt="shoppingcart" />
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
