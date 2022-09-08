import Footer from './Footer'
import Navbar from './Navbar'
import CollapsibleExample from './Navbar2'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      {/* 導覽列 */}
      <Navbar />
      <CollapsibleExample />

      {/* Outlet相當於props.children，呈現區域頁面的內容 */}
      {/* 代表子頁區域內容 */}
      <Outlet />

      {/* 頁尾資訊 */}
      <Footer />
    </>
  )
}
export default Layout
