import Footer from './Footer'
import Navbar from './Navbar'
// import CollapsibleExample from './Navbar2'
import { Outlet } from 'react-router-dom'
import NavbarMobile from './NavbarMobile'

function Layout() {
  return (
    <>
      {/* 導覽列 */}
      <Navbar />
      <NavbarMobile />
      {/* <CollapsibleExample /> */}

      {/* <div className="container-xxl d-flex-column justify-context-center"> */}
      <div className="Layout-outlet-position">
        <Outlet />

        {/* </div> */}
        {/* 頁尾資訊 */}
        <Footer />
      </div>
    </>
  )
}
export default Layout
