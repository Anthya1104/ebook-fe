// import React from 'react'

// function Checkout() {
//   return (
//     <div>Checkout</div>
//   )
// }

// export default Checkout

import { useCart } from '../../../utils/useCart'
import { useNavigate } from 'react-router-dom'
import { useNavigate2 } from 'react-router-dom'
// import ProductList from 'pages/Product/ProductList'
import ProductList from '../../Product/ProductList'

function ListItemsWithHook({ tab, handleStep }) {
  // 使用hooks 解出所需的狀態與函式(自context)
  const { cart, items, plusOne, minusOne, removeItem } = useCart()
  let navigate = useNavigate()

  const handleClick = (path) => () => {
    navigate(path)
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
        <thead className='cart-topnav'>
          <tr>
            {/* <th>id</th> */}
            <th>名稱</th>
            {/* <th>單價</th> */}
            {/* <th>數量</th> */}
            <th>小計</th>
            {/* <th>移除</th> */}
          </tr>
        </thead>
        <tbody>
          {items.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.name} </td>
                <td>$ {v.price}</td>
                {/* 設定tab是購物車還是收藏 */}
                {/* <td>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      removeItem(v.id)
                    }}
                  >
                    移除
                  </button>
                  {tab === 'cart' ? (
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        removeItem(v.id)
                      }}
                    >
                      移入收藏
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        removeItem(v.id)
                      }}
                    >
                      移入購物車
                    </button>
                  )}
                </td> */}
              </tr>
            )
          })}
        </tbody>
      </table>
          <div className='Checkout-box'>
      <div className="d-flex">
        <div className="me-4">
          <h5 className="me-4 co-text-em-color">付款方式 </h5>
          <input type="radio" value="creditcard" />
          <label>信用卡</label>
          <br />
          <input type="radio" value="linepay" />
          <label>LINE PAY</label>
          <br />
          <input type="radio" value="atm" />
          <label>ATM 轉帳</label>
        </div>

        <div>
          <h5 className='co-text-em-color' >訂單資訊 </h5>
          共有 {cart.totalItems}件商品
          <br />
          訂單小計：$ {cart.cartTotal}
          <br />
          <br />
          {cart.isEmpty && '購物車為空'}
          <hr />
        </div>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button type="button" className="btn co-btn" onClick={handleStep(3)}>
          確定付款
        </button>
      </div>
    </>
  )
}

export default ListItemsWithHook
