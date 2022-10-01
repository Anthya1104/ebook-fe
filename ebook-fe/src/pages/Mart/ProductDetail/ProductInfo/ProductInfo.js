import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './ProductInfo.scss'
import { DATA } from './MockData'
import CartIcon from '../../../../img/icon-cart.svg'
import TrialIcon from '../../../../img/icon-trial.svg'
import HeartIcon from '../../../../img/icon-heart.svg'
import MemberComment from './MemberComment/MemberComment'

function ProductInfo() {
  // TODO: MOCK_DATA 串接 API 後刪除
  const {
    img,
    title,
    subTitle,
    author,
    translator,
    publishingHouse,
    publishingData,
    lang,
    price,
    detail,
    aboutAuthor,
    aboutTranslator,
    recommended,
    memberRecommended,
  } = DATA
  return (
    <Container className="ProductInfo">
      <Row className="mb-5">
        <Col>
          <img className="ProductInfo-img" src={img} alt="商品圖" />
        </Col>
        <Col>
          <div>
            <div className="ProductInfo-title">{title}</div>
            <div className="ProductInfo-subTitle">{subTitle}</div>
            <div className="ProductInfo-bookInfo">作者：{author}</div>
            <div className="ProductInfo-bookInfo">譯者：{translator}</div>
            <div className="ProductInfo-bookInfo">
              出版社：{publishingHouse}
            </div>
            <div className="ProductInfo-bookInfo">
              出版日期：{publishingData}
            </div>
            <div className="ProductInfo-bookInfo">語言：{lang}</div>
            <div className="ProductInfo-bookInfo">
              售價：<span>$</span>
              <span className="ProductInfo-bookInfo-price">{price}</span>
            </div>
            <ButtonToolbar className="mt-5">
              <ButtonGroup className="me-2">
                <Button className="btn-danger" size="sm">
                  <img src={CartIcon} alt="buy" /> 購買
                </Button>
              </ButtonGroup>
              <ButtonGroup className="me-2">
                <Link to="/Preview">
                  <Button className="btn-danger">
                    <img src={TrialIcon} alt="trial" /> 試閱
                  </Button>
                </Link>
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
            <a href="#memberRecommended">
              <Button className="btn-primary" size="sm">
                會員評論
              </Button>
            </a>
          </ButtonGroup>
          <div className="ProductInfo-detail"></div>
          <h4 id="detail">詳細書訊</h4>
          <hr />
          <p className="mb-5">{detail}</p>
          <h4 id="aboutAuthor">作者簡介</h4>
          <hr />
          <p className="mb-5">{aboutAuthor}</p>
          <h4 id="aboutTranslator">譯者簡介</h4>
          <hr />
          <p className="mb-5">{aboutTranslator}</p>
          <h4 id="recommended">好評推薦</h4>
          <hr />
          <p className="mb-5">{recommended}</p>
          <h4 id="memberRecommended">會員評論</h4>
          <hr />
          <div>
            {!!memberRecommended.length &&
              memberRecommended.map(
                ({ recommendedId, avatar, name, star, recommended }) => (
                  <MemberComment
                    key={recommendedId}
                    recommendedId={recommendedId}
                    avatar={avatar}
                    name={name}
                    star={star}
                    recommended={recommended}
                  />
                )
              )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductInfo
