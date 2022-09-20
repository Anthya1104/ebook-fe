import { useState, useParam, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../utils/useCart'

import Select from './Select'
import './ProductList.scss'

import products from '../data/products.json'

import '../../../img/book.jpg'
import { Link } from 'react-router-dom'
import TopCategory from '../../Mart/TopCategory/TopCategory'
import SearchBar from '../../CustomizedShoppingCart/Product/SearchBar/SearchBar'
import ProductFilter from '../Product/ProductFilter/ProductFilter'

function ProductList(props) {
  // 對話盒使用
  const [show, setShow] = useState(false)
  // 對話盒中的商品名稱
  const [productName, setProductName] = useState('')

  const navigate = useNavigate()

  const { addItem } = useCart()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const showModal = (name) => {
    setProductName(name + '已成功加入購物車')
    handleShow()
  }

  const [cat, setCat] = useState('')
  const [productsDisplay, setProductsDisplay] = useState([])

  useEffect(() => {
    setProductsDisplay(products)
  }, [])

  useEffect(() => {
    if (cat) {
      setProductsDisplay(products.filter((v, i) => v.book_category === cat))
    }
  }, [cat])

  const messageModal = (
    <>
      <div className="d-flex">
        <div>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>成功加入購物車</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="btn co-btn" onClick={handleClose}>
                繼續購物
              </Button>
              <Button
                variant="btn co-btn"
                onClick={() => {
                  // 導向購物車頁面
                  // props.history.push('/')
                  // navigate('/', { replace: true })
                  navigate('/Cart')
                }}
              >
                前往購物車結帳
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  )

  const display = (
    //TEST//
    <div className="row row-cols-1 row-cols-md-4 g-4 ">
      {productsDisplay.map((v, i) => {
        return (
          <>
            <div className="col" key={v.id}>
              {/* 怎麼帶id??? */}
              <div className="card ProductList-card">
                <Link to={'/Cart/ProductDetail/' + v.id}>
                  {console.log('/Cart/ProductDetail/' + v.id)}
                  <img
                    src={v.book_img}
                    className="card-img-top ProductList-card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title ProductList-bookname">
                      {v.book_name}
                    </h5>
                    <p className="card-text">
                      {/* <h5 className="card-title">{v.book_subtitle}</h5> */}
                      <h5 className="card-title ProductList-author">
                        {v.author}
                      </h5>
                      {/* 這裡只是放一些商品的描述說明。這裡只是放一些商品的描述說明。 */}
                    </p>
                    <p className="card-text text-danger">$ {v.price}元</p>
                  </div>
                </Link>
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn  co-btn"
                    onClick={() => {
                      // 商品原本無數量屬性(quantity)，要先加上
                      const item = { ...v, quantity: 1 }
                      // 注意: 重覆加入會自動+1產品數量
                      addItem(item)
                      // 呈現跳出對話盒
                      showModal(v.name)
                    }}
                  >
                    加入購物車
                  </button>
                  <button className="btn  co-btn">加入收藏</button>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )

  return (
    <>
      {/* <h1>商品列表頁範例</h1> */}
      <TopCategory />
      <SearchBar />
      <ProductFilter />
      <div className="my-5"></div>
      {/* <p className="text-nowrap bd-highlight">/pages/Product/ProductList.js</p> */}
      <div className="d-flex">
        <div className="me-5">
          <Select cat={cat} setCat={setCat} />
        </div>
        <div>
          {messageModal}
          {display}
        </div>
      </div>
    </>
  )
}

export default ProductList
