import '../style/Navbar.scss'

import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar d-flex justify-content-start">
      <div className="d-flex p-2 align-items-center">
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <div className="menu d-flex justify-content-start align-items-center mx-2">
          <NavLink className="mx-2" activeClassName="selected" to="/Login">
            <p className="">Login</p>
          </NavLink>
          <Link className="mx-2" to="/Mart">
            Mart
          </Link>
          <Link className="mx-2" to="/Member">
            Member
          </Link>
          <Link className="mx-2" to="/Cart">
            Shopping Cart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
