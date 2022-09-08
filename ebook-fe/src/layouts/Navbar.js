import '../style/Navbar.scss'

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar d-flex justify-content-start">
      <div className="d-flex p-2 align-items-center">
        <NavLink to="/">
          <h4>Home</h4>
        </NavLink>
        <div className="menu d-flex justify-content-start align-items-center mx-2">
          <NavLink className="mx-2" activeClassName="selected" to="/Login">
            <p className="">Login</p>
          </NavLink>
          <NavLink className="mx-2" to="/Mart">
            Mart
          </NavLink>
          <NavLink className="mx-2" to="/Member">
            Member
          </NavLink>
          <NavLink className="mx-2" to="/Cart">
            Shopping Cart
          </NavLink>
          <NavLink className="mx-2" to="/Materials">
            Material Reference
          </NavLink>
          <NavLink className="mx-2" to="/Preview">
            Preview
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
