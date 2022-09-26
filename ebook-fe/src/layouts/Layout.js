import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      {/* 導覽列 */}
      {/* <Navbar /> */}

      <div>
        <Outlet />
      </div>
      {/* 頁尾資訊 */}
      {/* <Footer /> */}
    </>
  )
}
export default Layout
