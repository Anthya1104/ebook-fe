import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './CouponModal.scss'
// import '../../../../img/coupon.png'
import '../../../../img/coupon-bg.png'
import { Link } from 'react-router-dom'
import { Coupon } from '../../../Member/Coupon/marketing'

function CouponModal({ setCouponAmount }) {
  const values = [true]
  const [fullscreen, setFullscreen] = useState(true)
  const [show, setShow] = useState(false)

  function handleShow(breakpoint) {
    setFullscreen(breakpoint)
    setShow(true)
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2 ShoppingCart-btn-border-radius" onClick={() => handleShow(v)}>
          請選擇優惠券
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal
        className="modal-bg d-flex justify-content-center text-center"
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <div className="modal-content-bg">
          <Modal.Header closeButton>
            <div className="coupon-modal-title text-center">
              <Modal.Title>
                <h3 className="choose">選擇優惠券</h3>
              </Modal.Title>
            </div>
          </Modal.Header>
          <div>
            <Modal.Body className="CouponModal-inMiddle">
              <div className="d-flex flex-wrap coupon-modal-body ">
                {Coupon.map((c, i) => (
                  <Button
                    variant="outline-light coupon-button d-flex"
                    onClick={() => setCouponAmount(c.Coupon_discount)}
                  >
                  {/* <Modal.Header closeButton></Modal.Header> */}
                    <div className="coupon-button-img">
                      <img src={c.url} alt="coupon_image" />
                    </div>

                    <div className="justify-content-start text-start p-2 ms-4 text-white coupon-p">
                      <h5>{c.Coupon_name}</h5>
                      <h4>{c.Coupon_discount}</h4>
                      <p>{c.Coupon_edte}</p>
                      <p>{c.Coupon_code}</p>
                    </div>
                  </Button>
                ))}
              </div>
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CouponModal