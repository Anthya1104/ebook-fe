// import { useCart } from '../../../utils/useCart'
import { useCart } from '../../utils/useCart'
import { useNavigate } from 'react-router-dom'
import { useNavigate2 } from 'react-router-dom'
// import ProductList from 'pages/Product/ProductList'
// import ProductList from '../../../pages/Product/ProductList'
import ProductList from '../../Product/ProductList'

function ListItemsWithHook({ tab, handleStep }) {
  // 使用hooks 解出所需的狀態與函式(自context)
  const { cart, items, plusOne, minusOne, removeItem } = useCart()
  let navigate = useNavigate()

  const handleClick = (path) => () => {
    navigate(path)
  }

  return (
    <div>
      <table
        className="table"
        cellPadding="0"
        border="0"
        width="100%"
        cellSpacing="0"
      >
        <thead className="cart-topnav">
          <tr>
            {/* <th>id</th> */}
            <th>名稱</th>
            {/* <th>單價</th> */}
            {/* <th>數量</th> */}
            <th>小計</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="co-text-color">
          {items.map((v, i) => {
            return (
              <tr key={v.id}>
                {/* <td>{v.book_img}</td> */}
                <td>{v.book_name} </td>
                <td>$ {v.price}</td>
                {/* 設定tab是購物車還是收藏 */}
                <td>
                  <button
                    type="button"
                    className="btn co-btn"
                    onClick={() => {
                      removeItem(v.id)
                    }}
                  >
                    移除
                  </button>
                  {tab === 'cart' ? (
                    <button
                      type="button"
                      className="btn co-btn"
                      onClick={() => {
                        removeItem(v.id)
                      }}
                    >
                      移入收藏
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn co-btn"
                      onClick={() => {
                        removeItem(v.id)
                      }}
                    >
                      移入購物車
                    </button>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div>
        <div className="d-flex justify-content-between">
          <form>
            <label>
              <input type="text" name="name" placeholder="請輸入優惠券折扣碼" />
            </label>
            <input
              className="ListItemsWithHook-btn"
              type="submit"
              value="使用"
            />
          </form>
        </div>

        <div className="d-flex justify-content-end co-text-color">
          共有&nbsp;{' '}
          <span className="co-text-em-color"> {cart.totalItems}</span> &nbsp;
          件商品
        </div>
        <div className="d-flex justify-content-end co-text-em-color">
          訂單小計：$ {cart.cartTotal}
        </div>

        <br />
        {cart.isEmpty && '購物車為空'}
        <hr />
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn co-btn"
          onClick={handleClick('/Cart/product-list')}
        >
          繼續購物
        </button>
        <button type="button" className="btn co-btn" onClick={handleStep(2)}>
          結帳
        </button>
      </div>
    </div>
  )
}

export default ListItemsWithHook
