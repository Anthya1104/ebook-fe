// import { useCart } from '../../../utils/useCart'
import { useCart } from '../../utils/useCart'
import { useNavigate } from 'react-router-dom'
import { useNavigate2 } from 'react-router-dom'
// import ProductList from '../../../pages/Product/ProductList'
import ProductList from '../../Product/ProductList'
import Form from 'react-bootstrap/Form'

import { Link } from 'react-router-dom'
import Popup from './Popup'

function ListItemsWithHook({ tab, handleStep }) {
  // 使用hooks 解出所需的狀態與函式(自context)
  const { cart, items, plusOne, minusOne, removeItem } = useCart()
  let navigate = useNavigate()

  const handleClick = (path) => () => {
    navigate(path)
  }

  return (
    <>
      <div>
        <table
          className="table"
          cellPadding="0"
          border="0"
          width="100%"
          cellSpacing="0"
        >
          <thead>
            <tr className="SingleCart-topnav">
              <th style={{ width: 200 }}>商品明細</th>
              <th></th>
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
                <td>
                  <img
                    style={{ width: 120, height: 160 }}
                    src={v.book_img}
                    className="card-img-top ProductList-card-img-top"
                    alt="..."
                  />
                </td>
                  <td>{v.book_name} </td>
                  <td>${v.price}</td>
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

        <div>
          <div className="my-5">
            <div className="SingleCart-topnav py-2 ps-2">訂單資訊 </div>
            <br />
            共有&nbsp;
            <span className="ListItemsWithHook-text-em-color">
              {cart.totalItems}
            </span>
            &nbsp;件商品
            <br />
            訂單小計&nbsp;
            <span className="ListItemsWithHook-text-em-color">
              $ {cart.cartTotal}
            </span>
            <br />
            {cart.isEmpty && '購物車為空'}
            {/* <hr /> */}
          </div>
        </div>

        <div>
          <div className="SingleCart-topnav py-2 ps-2"> 付款方式：信用卡</div>
          <br />
          <div className="d-flex Pay-text-style">
            <Form.Label htmlFor=" ">信用卡號：</Form.Label>
            <Form.Control
              className="Pay-input-style"
              type="password"
              id="inputPassword5"
              style={{ width: 80 }}
            />
            -
            <Form.Control
              className="Pay-input-style"
              type="password"
              id="inputPassword5"
              style={{ width: 80 }}
            />
            -
            <Form.Control
              className="Pay-input-style"
              type="password"
              id="inputPassword5"
              style={{ width: 80 }}
            />
            -
            <Form.Control
              className="Pay-input-style"
              type="password"
              id="inputPassword5"
              style={{ width: 80 }}
            />
          </div>
          <div className="d-flex mt-3 Pay-text-style">
            <Form.Label htmlFor="inputPassword5">持卡人姓名：</Form.Label>
            <Form.Control
              className="Pay-input-style"
              type=""
              id=""
              style={{ width: 200 }}
            />
          </div>
          <div className="d-flex mt-3 Pay-text-style">
            有效年月：
            <Form.Select
              className="Pay-input-style me-1"
              aria-label="Default select example"
              style={{ width: 100 }}
            >
              <option>月</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </Form.Select>
            <Form.Select
              className="Pay-input-style"
              aria-label="Default select example"
              style={{ width: 100 }}
            >
              <option>年</option>
              <option value="1">22</option>
              <option value="3">23</option>
              <option value="4">24</option>
              <option value="5">25</option>
              <option value="6">26</option>
              <option value="7">27</option>
              <option value="8">28</option>
              <option value="9">29</option>
              <option value="10">30</option>
            </Form.Select>
          </div>
        </div>
        <div className="d-flex mt-3 Pay-text-style">
          <Form.Label htmlFor="inputPassword5">背面末三碼：</Form.Label>
          <Form.Control
            className="Pay-input-style"
            type=""
            id=""
            style={{ width: 200 }}
          />
        </div>

        <div className="d-flex justify-content-end">
          {/* <button
            type="button"
            className="btn co-btn"
            // onClick={handleStep(3)}
          >
            確定付款
          </button> */}
          <Popup />
        </div>
      </div>
    </>
  )
}

export default ListItemsWithHook
