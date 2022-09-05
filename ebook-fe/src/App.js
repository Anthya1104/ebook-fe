import './style/global.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Layout
import Layout from './layouts/Layout'
// Routes
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Member from './pages/Member'
import NotFound from './pages/NotFound'
import Mart from './pages/Mart'
import React from 'react'
import FavList from './pages/Cart/FavList'
import ToBuyList from './pages/Cart/ToBuyList'
import Products from './pages/Mart/Products'
import SearchResult from './pages/Mart/SearchResult'
import OverView from './pages/Member/OverView'
import Order from './pages/Member/Order'
import Orders from './pages/Member/Order/Orders'
import OrderDetail from './pages/Member/Order/OrderDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />

          <Route path="Member" element={<Member />}>
            <Route index element={<OverView />} />
            <Route path="order" element={<Order />}>
              <Route index element={<Orders />} />
              <Route path="orderdetail" element={<OrderDetail />} />
            </Route>
          </Route>
          {/* 商城 */}
          <Route path="Mart" element={<Mart />}>
            <Route index element={<Products />} />
            <Route path="SearchResult" element={<SearchResult />} />
          </Route>
          {/* 購物車 */}
          <Route path="Cart" element={<Cart />}>
            <Route index element={<ToBuyList />} />
            <Route path="fav-list" element={<FavList />} />
          </Route>

          {/* 404未找到的頁面路由，需放在最下方 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
