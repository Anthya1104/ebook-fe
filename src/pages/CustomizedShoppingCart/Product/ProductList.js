import { useState, useParam, useEffect, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../utils/useCart'
import './ProductList.scss'
import '../../../img/book.jpg'
import { Link } from 'react-router-dom'
import TopCategory from '../../Mart/TopCategory/TopCategory'
import { useSecondCart } from '../utils/useSecondCart'

import axios from 'axios'
import { API_URL } from '../../../utils/config'

import products from '../data/products.json'
import SelectPrice from './SelectPrice'
import SelectPublisher from './SelectPublisher'
// import Slick from './Slick'
// import DropdownSelectPublisher from './DropdownSelectPublisher'
import DropdownSelect from './DropdownSelect'

function ProductList(props) {
  const getProductList = async () => {
    let response = await axios.get(`${API_URL}/market/product-list`)
    console.log(response.data)
    setProductsDisplay(response.data)
  }
  useEffect(() => {
    getProductList()
  }, [])
  // 對話盒使用
  const [show, setShow] = useState(false)
  // 對話盒中的商品名稱
  // const [product, setProduct] = useState(products)
  const [productName, setProductName] = useState('')
  const [productTitle, setProductTitle] = useState('')
  const [productBtn, setProductBtn] = useState('')

  const navigate = useNavigate()

  const { addItem } = useCart()
  const { addSecondItem } = useSecondCart()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const showModal = (name) => {
    setProductName('已成功加入購物車')
    setProductTitle('加入購物車')
    setProductBtn('前往結帳')
    // setNavigateLink('/Cart')
    handleShow()
  }

  const showModal2 = (name) => {
    setProductName('已成功加入收藏')
    setProductTitle('加入收藏')
    setProductBtn('前往我的收藏')
    // setNavigateLink('/Cart/WishList')
    handleShow()
  }

  const [cat, setCat] = useState('')
  const [searchBook, setSearchBook] = useState('')
  const [searchBookName, setSearchBookName] = useState('')
  const [productsDisplay, setProductsDisplay] = useState([])
  const [searchPublisher, setSearchPublisher] = useState('')

  // useEffect(() => {
  //   setProductsDisplay(products)
  // }, [])

  useEffect(() => {
    // if (!cat) {
    //   return getProductList()
    // } else
    if (cat) {
      setProductsDisplay(products.filter((v, i) => v.book_category === cat))
    }
  }, [cat])

  useEffect(() => {
    if (searchBook) {
      if (searchBook === 'ALL') {
        setProductsDisplay(products)
      } else {
        setProductsDisplay(
          products.filter((v, i) => v.price_range === searchBook)
        )
      }
    }
  }, [searchBook])

  useEffect(() => {
    if (searchBookName.length) {
      setProductsDisplay(
        products.filter((v, i) => v.book_name.includes(searchBookName))
      )
    }
  }, [searchBookName])

  //依出版社搜尋
  useEffect(() => {
    if (searchPublisher) {
      if (searchPublisher === 'ALL') {
        setProductsDisplay(products)
      } else {
        setProductsDisplay(
          products.filter((v, i) => v.publisher === searchPublisher)
        )
      }
    }
    // setProductsDisplay(products)
  }, [searchPublisher])

  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{productTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary ShoppingCart-btn-border-radius"
          onClick={handleClose}
        >
          繼續購物
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            // 導向購物車頁面
            // props.history.push('/')
            navigate('/Cart', { replace: true })
          }}
        >
          {productBtn}
        </Button>
      </Modal.Footer>
    </Modal>
  )

  const messageModal2 = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{productTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary ShoppingCart-btn-border-radius"
          onClick={handleClose}
        >
          繼續購物
        </Button>
      </Modal.Footer>
    </Modal>
  )

  const display = (
    <div className="row ProductList-display-mobile-position ">
      {productsDisplay.map((v, i) => {
        return (
          <>
            <div
              className="col-8 col-md-3 mb-4 ProductList-card-outer"
              key={v.id}
            >
              <div className="card ProductList-card animate__animated animate__fadeInRight">
                <Link
                  to={'/Cart/ProductDetail/' + v.id}
                  style={{ textDecoration: 'none' }}
                >
                  {/* {console.log('/Cart/ProductDetail/' + v.id)} */}
                  <img
                    src={v.book_img}
                    className="card-img-top ProductList-card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body ProductList-card-body">
                    <h5 className="card-title ProductList-bookname">
                      {v.book_name}
                    </h5>
                    <p className="card-text">
                      {/* <h5 className="card-title">{v.book_subtitle}</h5> */}
                      <h5 className="card-title ProductList-author">
                        {v.author}
                      </h5>
                    </p>
                    <p className="card-text text-danger ProductList-price-text">
                      $ {v.price}元
                    </p>
                  </div>
                </Link>
                <div className="my-2 ProductList-mobile-btn-outer">
                  <button
                    type="button"
                    className="btn btn-primary me-2 ProductList-mobile-btn ShoppingCart-btn-border-radius"
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
                  <button
                    type="button"
                    className="btn btn-primary ProductList-mobile-btn ShoppingCart-btn-border-radius"
                    onClick={() => {
                      // 商品原本無數量屬性(quantity)，要先加上
                      const item = { ...v, quantity: 1 }
                      // 注意: 重覆加入會自動+1產品數量
                      addSecondItem(item)
                      // 呈現跳出對話盒
                      showModal2(v.name)
                    }}
                  >
                    收藏
                  </button>
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
      <TopCategory cat={cat} setCat={setCat} />
      {/* RWD用下拉分類&搜尋框 */}
      <div className="ProductList-DropdownAndSearchBook">
        <div className="ProductList-mobile-SearchBookNameBox">
          <input
            className="ProductList-SearchBookNameBox"
            type="text"
            value={searchBookName}
            placeholder="搜尋書名"
            onChange={(e) => setSearchBookName(e.target.value)}
          />
        </div>
        <DropdownSelect />
      </div>
      {/* RWD用下拉分類&搜尋框 */}
      <div className="my-5"></div>
      <div className="d-flex">
        <div className="me-5 ProductList-showSelect animate__animated animate__fadeInLeft">
          <div className="mb-3">
            <h4 className="Select-title">篩選條件</h4>
            <input
              className="ProductList-SearchBookNameBox"
              type="text"
              value={searchBookName}
              placeholder="搜尋書名"
              onChange={(e) => setSearchBookName(e.target.value)}
            />
          </div>
          <SelectPrice searchBook={searchBook} setSearchBook={setSearchBook} />
          <SelectPublisher
            searchPublisher={searchPublisher}
            setSearchPublisher={setSearchPublisher}
          />
        </div>
        <div className="ProductList-product-width">
          {messageModal}
          {messageModal2}
          {display}
        </div>
      </div>
    </>
  )
}

export default ProductList
