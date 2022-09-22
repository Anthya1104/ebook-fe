// import React from 'react'

// function Checkout() {
//   return (
//     <div>Checkout</div>
//   )
// }

// export default Checkout

// import { useCart } from '../../utils/useCart'
import { useCart } from '../../../CustomizedShoppingCart/utils/useCart'
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
        <thead className="SingleCart-topnav">
          <tr>
            {/* <th>id</th> */}
            <th>商品明細</th>
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
                <td>{v.book_name} </td>
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
      <div className="Checkout-box my-5">
        <div className="d-flex">
          <div className="me-4">
            <h5 className="me-4 ListItemsWithHook-text-em-color">付款方式 </h5>
            <input type="radio" value="creditcard" />
            <label className="py-1"> &nbsp;信用卡</label>
            <br />
            <input type="radio" value="linepay" />
            <label className="py-1"> &nbsp;LINE PAY</label>
            <br />
            <input type="radio" value="atm" />
            <label className="py-1"> &nbsp;ATM 轉帳</label>
          </div>

          <div>
            <h5 className="ListItemsWithHook-text-em-color ">訂單資訊 </h5>
            共有&nbsp;
            <span className="ListItemsWithHook-text-em-color">
              {cart.totalItems}
            </span>&nbsp;
            件商品
            <br />
            訂單小計{' '}
            <span className="ListItemsWithHook-text-em-color">
              $ {cart.cartTotal}
            </span>
            <br />
            <br />
            {cart.isEmpty && '購物車為空'}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end my-5">
        <button
          type="button"
          className="btn btn-primary-reverse"
          onClick={handleStep(3)}
        >
          確定付款
        </button>
      </div>
    </>
  )
}

export default ListItemsWithHook
