// import { useCart } from '../../utils/useCart'
import { useCart } from '../../../CustomizedShoppingCart/utils/useCart'
import { useNavigate } from 'react-router-dom'
import { useNavigate2 } from 'react-router-dom'
// import ProductList from 'pages/Product/ProductList'
import ProductList from '../../Product/ProductList'
import CouponModal from '../components/CouponModal'
import { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../utils/config'

function ListItemsWithHook({ tab, handleStep, couponAmount0 }) {
  // 使用hooks 解出所需的狀態與函式(自context)
  const { cart, items, plusOne, minusOne, removeItem } = useCart()
  let navigate = useNavigate()

  /// 9/29優惠券
  const [couponAmount, setCouponAmount] = useState(couponAmount0)
  ///

  const handleClick = (path) => () => {
    navigate(path)
  }

  const handleLinePay = async () => {
    try {
      const result = await axios.post(`${API_URL}/line/createOrder`)
      console.log(result.data)
      window.location = result.data.redirect
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <table
        className="table"
        cellPadding="0"
        border="0"
        width="100%"
        cellSpacing="0"
      >
        <thead className="SingleCart-topnav">
          <tr>
            <th style={{ width: 200 }} className="SingleCart-tr">
              商品明細
            </th>
            <th></th>
            <th className="SingleCart-tr2">小計</th>
          </tr>
        </thead>
        <tbody>
          {items.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>
                  <img
                    style={{ width: 120, height: 160 }}
                    src={v.book_img}
                    className="card-img-top ProductList-card-img-top"
                    alt="..."
                  />
                </td>
                <td>{v.book_name} </td>
                <td>$ {v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="Checkout-box my-5">
        <div className="d-flex">
          <div>
            <h5 className="ListItemsWithHook-text-em-color ">訂單資訊 </h5>
            共有&nbsp;
            <span className="ListItemsWithHook-text-em-color">
              {cart.totalItems}
            </span>
            &nbsp; 件商品
            <br />
            訂單小計
            <span className="ListItemsWithHook-text-em-color">
              $ {cart.cartTotal}
            </span>
            <br />
            {cart.isEmpty && '購物車為空'}
          </div>

          <div className="">
            <h5 className="me-4 ListItemsWithHook-text-em-color">付款方式 </h5>
            <div className="my-1">
              <button
                type="button"
                className="btn btn-primary-reverse ShoppingCart-btn-border-radius"
                onClick={handleStep(3)}
              >
                信用卡支付
              </button>
              <button
                type="button"
                className="btn btn-primary-reverse ShoppingCart-btn-border-radius"
                onClick={handleLinePay}
              >
                LinePay支付
              </button>
            </div>
            {/* <input type="radio" value="creditcard" />
            <label className="py-1"> &nbsp;信用卡</label>
            <br />
            <input type="radio" value="linepay" />
            <label className="py-1"> &nbsp;LINE PAY</label>
            <br />
            <input type="radio" value="atm" />
            <label className="py-1"> &nbsp;ATM 轉帳</label> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListItemsWithHook
