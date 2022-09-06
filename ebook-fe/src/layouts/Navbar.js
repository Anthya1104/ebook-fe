import '../style/Navbar.scss'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar d-flex justify-content-start">
      <div className="d-flex p-2 align-items-center">
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <div className="menu d-flex justify-content-start align-items-center mx-2">
          <Link className="mx-2" to="/Login">
            Login
          </Link>
          <Link className="mx-2" to="/Mart">
            Mart
          </Link>
          <Link className="mx-2" to="/Member">
            Member
          </Link>
          <Link className="mx-2" to="/Preview">
            Preview
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
