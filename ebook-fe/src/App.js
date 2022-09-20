import './style/global.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Layout
import Layout from './layouts/Layout'
// Routes
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Member from './pages/Member'
import Preview from './pages/Preview/Index'
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
// import ProductDetail from './pages/Mart/ProductDetail'
import ProductDetail from './pages/CustomizedShoppingCart/Product/ProductDetail'
import Bookshelf from './pages/Member/Bookshelf'
import OwnedBooks from './pages/Member/Bookshelf/OwnedBooks'
import OwnedBookDetail from './pages/Member/Bookshelf/OwnedBookDetail'
import Coupon from './pages/Member/Coupon'
import CouponList from './pages/Member/Coupon/CouponList'
import CouponDetail from './pages/Member/Coupon/CouponDetail'
import Materials from './pages/Materials'
import Chat from './pages/Chat'
// import Chat from './pages/Chat/ChatRooms/pages/chats'
// import Chat from './pages/Chat/ChatRooms/pages/_app'
import MemberIndex from './pages/MemberIndex'
import OwnedBooksList from './pages/Member/Bookshelf/OwnedBooksList'
import BookReviewList from './pages/Member/Bookshelf/BookReviewList'
import ShoppingCart from './pages/CustomizedShoppingCart/ShoppingCart'
import ProductList from './pages/CustomizedShoppingCart/Product/ProductList'
import SingleCart from './pages/CustomizedShoppingCart/ShoppingCart/SingleCart'
import Checkout from './pages/CustomizedShoppingCart/ShoppingCart/components/Checkout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="member-index" element={<MemberIndex />} />
          <Route path="Member" element={<Member />}>
            <Route index element={<OverView />} />
            {/* 訂單 */}
            <Route path="order" element={<Order />}>
              <Route index element={<Orders />} />
              <Route path=":orderId" element={<OrderDetail />} />
            </Route>
            {/* 書架 */}
            <Route path="bookshelf" element={<Bookshelf />}>
              <Route index element={<OwnedBooks />} />

              <Route path=":ownedBookId" element={<OwnedBookDetail />} />
            </Route>
            {/* 優惠券 */}
            <Route path="coupon" element={<Coupon />}>
              <Route index element={<CouponList />} />
              <Route path=":couponId" element={<CouponDetail />} />
            </Route>
          </Route>
          {/* 商城*/}
          <Route path="Mart" element={<Mart />}>
            <Route index element={<Products />} />
            {/* <Route path="ProductDetail" element={<ProductDetail />} /> */}
            <Route
              path="ProductDetail/:productId"
              element={<ProductDetail />}
            />
            <Route path="SearchResult" element={<SearchResult />} />
          </Route>
          {/* 購物車 */}
          <Route path="Cart" element={<ShoppingCart />}>
            <Route index element={<SingleCart />} />
            <Route path="product-list" element={<ProductList />} />
            <Route
              path="ProductDetail/:productId"
              element={<ProductDetail />}
            />
            <Route path="Checkout" element={<Checkout />} />
          </Route>
          <Route path="chat" element={<Chat />} />
          <Route path="materials" element={<Materials />} />
          {/* <Route path="SingleCart" element={<SingleCart />} /> */}
          {/* <Route path="Test" element={<Test />} /> */}
          <Route path="Preview" element={<Preview />} />
          {/* 404未找到的頁面路由，需放在最下方 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
