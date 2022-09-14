
import MyNavbar from '../../components/MyNavbar'
import MyFooter from '../../components/MyFooter'
import MainContent from '../../components/MainContent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import ProductList from './pages/Product/ProductList'
import ProductList from '../../pages/Product/ProductList'
import SingleCart from '../../pages/ShoppingCart/SingleCart'
import MultipleCart from '../../pages/ShoppingCart/MultipleCart'
import Checkout from '../../pages/ShoppingCart/components/Checkout'

// import Products from './pages/Product/Products'

// 切換頁面捲動至最上方
import ScrollToTop from '../../components/ScrollToTop'

// 匯入 Cart 要用的 ContextProvider
import { CartProvider } from '../../utils/useCart'
import { SecondCartProvider } from '../../utils/useSecondCart'
// 也可以直接載入cart範例
// 下面程式碼需改為. `<CartProvider initialCartItems={cartData}>`
// import cartData from './data/cart.json'

function Test() {
  return (
    // <div>hello</div>
    <SecondCartProvider localStorageKey="secondCart">
      <CartProvider>
        <BrowserRouter>
          <MyNavbar />
          <MainContent>
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<SingleCart />} />
                <Route path="multiple-cart" element={<MultipleCart />} />
                <Route path="product-list" element={<ProductList />} />
                {/* <Route path="Products" element={<Products />} /> */}
                <Route path="Checkout" element={<Checkout />} />
              </Routes>
            </ScrollToTop>
          </MainContent>
          <MyFooter />
        </BrowserRouter>
      </CartProvider>
    </SecondCartProvider>
  )
}

export default Test
