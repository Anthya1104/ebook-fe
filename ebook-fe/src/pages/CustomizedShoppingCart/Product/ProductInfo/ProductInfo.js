import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
// import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './ProductInfo.scss'
import CartIcon from '../../../../img/icon-cart.svg'
import TrialIcon from '../../../../img/icon-trial.svg'
import HeartIcon from '../../../../img/icon-heart.svg'
import { Modal, Button } from 'react-bootstrap'

// import { DATA } from './MockData'
// import MemberComment from './MemberComment/MemberComment'

import productsDetail from '../../data/products.json'

import { useCart } from '../../utils/useCart'
import { useState, useParam } from 'react'

function ProductInfo(productId) {
  function CreateBookInfo(v) {
    const { addItem } = useCart()
    const [productName, setProductName] = useState('')
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const showModal = (name) => {
      setProductName(name + '已成功加入購物車')
      handleShow()
    }

    return (
      <>
        <Row className="mb-5">
          <Col>
            <img className="ProductInfo-img" src={v.book_img} alt="商品圖" />
          </Col>
          <Col>
            <div>
              <div className="ProductInfo-title">{v.book_name}</div>
              <div className="ProductInfo-subTitle">{v.book_subTitle}</div>
              <div className="ProductInfo-bookInfo">作者：{v.author}</div>
              <div className="ProductInfo-bookInfo">譯者：{v.translator}</div>
              <div className="ProductInfo-bookInfo">出版社：{v.publisher}</div>
              <div className="ProductInfo-bookInfo">
                出版日期：{v.publication_date}
              </div>
              <div className="ProductInfo-bookInfo">語言：{v.language}</div>
              <div className="ProductInfo-bookInfo">
                售價：<span>$</span>
                <span className="ProductInfo-bookInfo-price">{v.price}</span>
              </div>
              <ButtonToolbar className="mt-5">
                <ButtonGroup className="me-2">
                  {/* <Button className="btn-danger" size="sm">
                    <img src={CartIcon} alt="buy" /> 購買
                  </Button> */}
                  <Button className="btn-danger" size="sm">
                    <img
                      src={CartIcon}
                      alt="buy"
                      onClick={() => {
                        // 商品原本無數量屬性(quantity)，要先加上
                        const item = { ...v, quantity: 1 }
                        // 注意: 重覆加入會自動+1產品數量
                        addItem(item)
                        // 呈現跳出對話盒
                        showModal(v.name)
                      }}
                    />{' '}
                    購買
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                  <Button className="btn-danger">
                    <img src={TrialIcon} alt="trial" /> 試閱
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                  <Button className="btn-danger">
                    <img src={HeartIcon} alt="heart" /> 收藏
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonGroup className="mb-4">
              <a href="#detail">
                <Button className="btn-primary" size="sm">
                  詳細書訊
                </Button>
              </a>
              <a href="#aboutAuthor">
                <Button className="btn-primary" size="sm">
                  作者簡介
                </Button>
              </a>
              <a href="#aboutTranslator">
                <Button className="btn-primary" size="sm">
                  譯者簡介
                </Button>
              </a>
              <a href="#recommended">
                <Button className="btn-primary" size="sm">
                  好評推薦
                </Button>
              </a>
              {/* <a href="#memberRecommended">
                    <Button className="btn-primary" size="sm">
                      會員評論
                    </Button>
                  </a> */}
            </ButtonGroup>
            <div className="ProductInfo-detail"></div>
            <h4 id="detail">詳細書訊</h4>
            <hr />
            <p className="mb-5">{v.book_details}</p>
            <h4 id="aboutAuthor">作者簡介</h4>
            <hr />
            <p className="mb-5">{v.author_details}</p>

            <h4 id="recommended">好評推薦</h4>
            <hr />
            <p className="mb-5">{v.recommendation}</p>
          </Col>
        </Row>
      </>
    )
  }
  let selectedProduct = productsDetail[productId.productId - 1]
  console.log(selectedProduct)
  return (
    <Container className="ProductInfo">
      {CreateBookInfo(selectedProduct)}
    </Container>
  )
}

export default ProductInfo
