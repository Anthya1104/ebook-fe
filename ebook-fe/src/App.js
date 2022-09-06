import './style/global.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 其它子頁面
import Home from './pages/Home'
// 版面頁面元件
import Layout from './layouts/Layout'
import Login from './pages/Login'
import Mart from './pages/Mart/Index'
import Member from './pages/Member'
import Preview from './pages/Preview/Index'
import NotFound from './pages/NotFound'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index代表此路由中的預設子頁 */}
          <Route index element={<Home />} />
          {/* 其它子頁面 */}
          <Route path="Login" element={<Login />} />
          <Route path="Mart" element={<Mart />} />
          <Route path="Member" element={<Member />} />
          <Route path="Preview" element={<Preview />} />

          {/* 404未找到的頁面路由，需放在最下方 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
