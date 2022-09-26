// import MyNavbar from './components/MyNavbar'
// import MyFooter from './components/MyFooter'
// import MainContent from './components/MainContent'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

import ProductList from '../Product/ProductList'
import SingleCart from './SingleCart'
// import MultipleCart from './pages/ShoppingCart/MultipleCart'
import Checkout from './components/Checkout'

// import Products from './pages/Product/Products'

// 切換頁面捲動至最上方
import ScrollToTop from '../../../Component/ScrollToTop'

// 匯入 Cart 要用的 ContextProvider
import { CartProvider } from '../utils/useCart'
import { SecondCartProvider } from '../utils/useSecondCart'
// 也可以直接載入cart範例
// 下面程式碼需改為. `<CartProvider initialCartItems={cartData}>`
// import cartData from './data/cart.json'

function ShoppingCart() {
  return (
    <SecondCartProvider localStorageKey="secondCart">
      <CartProvider>
        {/* <MainContent> */}
        <ScrollToTop>
          <div className="container-xxl d-flex-column justify-context-center">
            <Outlet />
          </div>
        </ScrollToTop>
        {/* </MainContent> */}
      </CartProvider>
    </SecondCartProvider>
  )
}

export default ShoppingCart
