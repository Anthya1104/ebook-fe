import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from 'react-router-dom'
import './CouponList.scss'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import coupon from '../../../img/coupon-ex.png'

function CouponList() {
  const couponId = 1
  return (
    <>
      <div className="container d-flex flex-column">
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="#">首頁</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              會員專區
            </Breadcrumb.Item>
            <Breadcrumb.Item active>優惠券</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex justify-content-end p-4 me-5">
          <DropdownButton
            align="end"
            title="優惠券排序"
            id="dropdown-menu-align-end"
          >
            <Dropdown.Item eventKey="1">日期舊到新</Dropdown.Item>
            <Dropdown.Item eventKey="2">日期新到舊</Dropdown.Item>
            <Dropdown.Item eventKey="3">折扣少到多</Dropdown.Item>
            <Dropdown.Item eventKey="4">折扣多到少</Dropdown.Item>
          </DropdownButton>
        </div>
        {/* <div className="ms-3">
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 12 }).map((_, idx) => (
              <Col>
                <Card className="coupon-card">
                  <Card.Img variant="top" src={coupon} />
                </Card>
              </Col>
            ))}
          </Row>
        </div> */}
        <div className="ms-3">
          <Row className="g-4 mb-4">
            <Col>
              <Card className="text-white coupon-card">
                <Card.Img src={coupon} alt="Card image" />
                <Card.ImgOverlay>
                  {/* <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card className="text-white coupon-card">
                <Card.Img src={coupon} alt="Card image" />
                <Card.ImgOverlay>
                  {/* <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row className="g-4 mb-4">
            <Col>
              <Card className="text-white coupon-card">
                <Card.Img src={coupon} alt="Card image" />
                <Card.ImgOverlay>
                  {/* <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card className="text-white coupon-card">
                <Card.Img src={coupon} alt="Card image" />
                <Card.ImgOverlay>
                  {/* <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row className="g-4 mb-4">
            <Col>
              <Card className="text-white coupon-card">
                <Card.Img src={coupon} alt="Card image" />
                <Card.ImgOverlay>
                  {/* <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card className="text-white coupon-card">
                <Card.Img src={coupon} alt="Card image" />
                <Card.ImgOverlay>
                  {/* <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row className="g-4 mb-4">
            <Col>
              <Card className="text-white coupon-card">
                <Card.Img src={coupon} alt="Card image" />
                <Card.ImgOverlay>
                  {/* <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card className="text-white coupon-card">
                <Card.Img src={coupon} alt="Card image" />
                <Card.ImgOverlay>
                  {/* <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row className="g-4 mb-4">
            <Col>
              <Card className="text-white coupon-card">
                <Card.Img src={coupon} alt="Card image" />
                <Card.ImgOverlay>
                  {/* <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card className="text-white coupon-card">
                <Card.Img src={coupon} alt="Card image" />
                <Card.ImgOverlay>
                  {/* <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default CouponList
