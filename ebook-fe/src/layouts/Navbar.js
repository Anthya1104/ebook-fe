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
        <div className=" align-items-center justify-content-between menu-1">
          <div className="menu justify-content-start align-items-center mx-2">
            <NavLink className="mx-3" to="/">
              <img className="ebooklogo" src={EbookLogo} alt="ebooklogo" />
            </NavLink>

            <NavLink className="menu-list mx-4" to="/">
              首頁
            </NavLink>

            <h4 className="navbar-separate">|</h4>
            <NavLink className="menu-list mx-4" to="/Cart/product-list">
              商品分類
            </NavLink>

            <h4 className="navbar-separate">|</h4>

            <NavLink className="menu-list mx-4" to="/member-index">
              會員專區
            </NavLink>

            <h4 className="navbar-separate">|</h4>

            <a
              className="mx-4 text-decoration-none"
              href="http://localhost:3000/chats"
            >
              聊天室
            </a>
          </div>

          <div className="menu-2 align-items-center justify-content-end ">
            <div class="searchBox">
              <input
                className="searchInput"
                type="text"
                name=""
                placeholder="搜尋"
              ></input>
              <div className="searchButton" href="#">
                <img className="navbar-search" src={Search} alt="search" />
              </div>
            </div>

            <div className="menu-2-2">
              <NavLink
                className="menu-2-icon mx-2"
                activeClassName="selected"
                to="/Login"
              >
                <img className="navbar-login" src={Login} alt="Login" />
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
