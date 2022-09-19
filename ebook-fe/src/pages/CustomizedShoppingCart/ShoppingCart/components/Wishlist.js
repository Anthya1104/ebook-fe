import React from 'react'
import { useCart } from 'utils/useCart'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

function Wishlist() {
  // 使用hooks 解出所需的狀態與函式(自context)
  const { cart, items, plusOne, minusOne, removeItem } = useCart()

  return (
    <>
      <Nav.Item className="d-flex">
        <Link to="/ListItemsWithHook" className="cart-changepage">
          購物車
        </Link>
        <Link to="/Wishlist" className="cart-changepage">
          我的收藏
        </Link>
      </Nav.Item>
      <div>
        <table
          className="table"
          cellPadding="0"
          border="0"
          width="100%"
          cellSpacing="0"
        >
          <thead className="cart-thead">
            <tr>
              <th></th>
              <th>收藏商品</th>
              <th>小計</th>
              {/* <th>數量</th> */}
              {/* <th>小計</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody className="cart-tbody">
            {items.map((v, i) => {
              return (
                <tr key={v.id}>
                  {/* <td>{v.id}</td> */}
                  <img className="cart-img" src={v.picture} />
                  <td>{v.name} </td>
                  <td>${v.price}</td>
                  {/* <td>
                  
                  {/* <td>${v.itemTotal}</td> */}
                  <td>
                    <button
                      type="button"
                      className="btn btn-light me-3"
                      onClick={() => {
                        removeItem(v.id)
                      }}
                    >
                      移除
                    </button>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        removeItem(v.id)
                      }}
                    >
                      移入購物車
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className="d-flex justify-content-end">
          <Link to="/" className="cart-changepage">
            繼續購物
          </Link>
        </div>
      </div>
    </>
  )
}

// export default ListItemsWithHook

export default Wishlist
