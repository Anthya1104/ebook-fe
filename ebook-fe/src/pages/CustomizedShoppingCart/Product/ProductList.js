import { useState, useParam, useEffect, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../utils/useCart'

// import Select from './Select'

import './ProductList.scss'
import '../../../img/book.jpg'
import { Link } from 'react-router-dom'
import TopCategory from '../../Mart/TopCategory/TopCategory'

import { useSecondCart } from '../utils/useSecondCart'

import axios from 'axios'
import { API_URL } from '../../../utils/config'

// import SearchBar from './SearchBar/SearchBar'

// 商品範例
import products from '../data/products.json'
import SelectPrice from './SelectPrice'
import SelectPublisher from './SelectPublisher'

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
  const [product, setProduct] = useState(products)
  const [productName, setProductName] = useState('')
  const [productTitle, setProductTitle] = useState('')
  const [productBtn, setProductBtn] = useState('')
  // const [navigateLink, setNavigateLink] = useState('')

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
      setProductsDisplay(
        products.filter((v, i) => v.price_range === searchBook)
      )
    }
  }, [searchBook])

  useEffect(() => {
    if (searchBookName.length) {
      setProductsDisplay(
        products.filter((v, i) => v.book_name.includes(searchBookName))
      )
    }
  }, [searchBookName])

  //依出版社
  useEffect(() => {
    if (searchPublisher) {
      setProductsDisplay(
        products.filter((v, i) => v.publisher === searchPublisher)
      )
    }
  }, [searchPublisher])

  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{productTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
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
        <Button variant="primary" onClick={handleClose}>
          繼續購物
        </Button>
        {/* <Button
          variant="primary"
          onClick={() => {
            // 導向購物車頁面
            // props.history.push('/')
            navigate('/Cart/WishList', { replace: true })
          }}
        >
          {productBtn}
        </Button> */}
      </Modal.Footer>
    </Modal>
  )

  const display = (
    <div className="row">
      {productsDisplay.map((v, i) => {
        return (
          <>
            <div
              className="col-12 col-sm-3 mb-4 ProductList-card-outer"
              key={v.id}
            >
              <div className="card ProductList-card">
                <Link to={'/Cart/ProductDetail/' + v.id}>
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
                      {/* 這裡只是放一些商品的描述說明。這裡只是放一些商品的描述說明。 */}
                    </p>
                    <p className="card-text text-danger">$ {v.price}元</p>
                  </div>
                </Link>
                <div className="my-2 ProductList-mobile-btn-outer">
                  <button
                    type="button"
                    className="btn btn-primary me-2 ProductList-mobile-btn"
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
                    className="btn btn-primary ProductList-mobile-btn"
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
      {/* <h1>商品列表頁範例</h1> */}
      {/* <div className="ProductList-showTopCategory"> */}

      <TopCategory cat={cat} setCat={setCat} />
      {/* </div> */}
      {/* <div className="testtest ">
      <TopCategory cat={cat} setCat={setCat} />
      </div> */}
      {/* <SearchBar /> */}
      {/* <ProductFilter /> */}
      <div className="my-5"></div>
      {/* <p className="text-nowrap bd-highlight">/pages/Product/ProductList.js</p> */}
      <div className="d-flex">
        <div className="me-5 ProductList-showSelect">
          <input
            type="text"
            value={searchBookName}
            onChange={(e) => setSearchBookName(e.target.value)}
          />
          {/* <Select
            searchBook={searchBook}
            setSearchBook={setSearchBook}

            searchPublisher={searchPublisher}
            setSearchPublisher={setSearchPublisher}
          /> */}
          <SelectPrice 
            searchBook={searchBook}
            setSearchBook={setSearchBook}
          />
          <SelectPublisher 
            searchPublisher={searchPublisher}
            setSearchPublisher={setSearchPublisher}
          />
        </div>
        <div>
          {messageModal}
          {messageModal2}
          {display}
        </div>
      </div>
    </>
  )
}

export default ProductList
