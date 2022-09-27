import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './CouponModal.scss'
// import '../../../../img/coupon.png'
import '../../../../img/coupon-bg.png'
import coupon1 from '../../../../img/coupon-business.png'
import coupon2 from '../../../../img/coupon-novel.png'
import coupon3 from '../../../../img/coupon-social.png'
import coupon4 from '../../../../img/coupon-lifestyle.png'
import coupon5 from '../../../../img/coupon-art.png'
import coupon6 from '../../../../img/coupon-science.png'
import coupon7 from '../../../../img/coupon-travel.png'
import coupon8 from '../../../../img/coupon-medical.png'
import coupon9 from '../../../../img/coupon-grow.png'
import coupon10 from '../../../../img/coupon-new.png'
import { Coupon } from '../../../Member/Coupon/marketing'

function CouponModal({ setCouponAmount }) {
  const values = [true]
  const [fullscreen, setFullscreen] = useState(true)
  const [show, setShow] = useState(false)

  function handleShow(breakpoint) {
    setFullscreen(breakpoint)
    setShow(true)
  }

  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)

  const onEnterPromoCode = (event) => {
    setPromoCode(event.target.value)
  }

  const checkPromoCode = () => {
    for (var i = 0; i < Coupon.length; i++) {
      if (promoCode === Coupon[i].Coupon_code) {
        return
      }
    }

    alert('Sorry, the Promotional code you entered is not valid!')
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
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
            <Modal.Body className="">
              <div className="d-flex flex-wrap coupon-modal-body ">
                {Coupon.map((c, i) => (
                  <Button
                    variant="outline-light coupon-button d-flex"
                    onClick={() => setCouponAmount(c.Coupon_discount)}
                  >
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
