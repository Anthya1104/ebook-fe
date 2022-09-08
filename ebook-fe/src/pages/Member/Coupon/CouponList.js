import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CouponList.scss'

function CouponList() {
  const couponId = 1
  return (
    <>
      <Card className="coupon-btn" bg="warning" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default CouponList
