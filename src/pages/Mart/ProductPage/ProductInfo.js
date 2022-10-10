import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsFillSuitHeartFill } from 'react-icons/fa'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


function ProductInfo() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src={require('../Card/book1.jpg')} />
          </Col>
          <Col>
            <div>
              <h4>書名</h4>
              <h4>作者：</h4>
              <h4>譯者：</h4>
              <h4>出版社：</h4>
              <h4>出版日期：</h4>
              <h4>語言：</h4>
              <h4>
                售價：<span>$300</span>
              </h4>

              <ButtonGroup size="lg" className="mb-2">
                <Button className="me-4 cart-btn">購買</Button>
                <Button className="me-4 cart-btn">試閱</Button>
                <Button className="cart-btn">
                  收藏
                </Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductInfo
