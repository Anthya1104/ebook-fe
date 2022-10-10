import React from 'react'
import './CartTable.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function CartTable() {
  return (
    <>
      {/* 資料怎麼帶??? */}
      <Container>
        <Row className="CartTable-bar">
          <Col lg={2}></Col>
          <Col lg={4}>商品明細</Col>
          <Col lg={2}>小計</Col>
          <Col lg={2}></Col>
        </Row>
        <Row className="CartTable-table">
          <Col lg={2}>
            <img className="CartTable-img" src={require('../Card/book1.jpg')} />
          </Col>

          <Col lg={4}>原子習慣</Col>
          <Col lg={2}>$870</Col>
          <Col lg={2}>
            <ButtonGroup size="lg" className="mb-2">
              <Button className="me-4 cart-btn">移除</Button>
              <Button className="cart-btn">移入收藏</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartTable
