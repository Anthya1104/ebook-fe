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

function CouponModal() {
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
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          使用
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
                <Button variant="outline-light coupon-button d-flex">
                  <div className="coupon-button-img">
                    <img src="https://i.imgur.com/N858zde.png" />
                  </div>
                  <div className="justify-content-start text-start p-2 ms-4 text-white coupon-p">
                    <h5>商業理財精選</h5>
                    <h4>$50</h4>
                    <p>2022-10-31</p>
                    <p>APy7Yxq1</p>
                  </div>
                </Button>
                <Button variant="outline-light coupon-button d-flex">
                  <div className="coupon-button-img">
                    <img src="https://i.imgur.com/Jq8Xeak.png" />
                  </div>
                  <div className="justify-content-start text-start p-2 ms-4 text-white coupon-p">
                    <h5>文學小說精選</h5>
                    <h4>$50</h4>
                    <p>22022-11-30</p>
                    <p>jFu9M5yn</p>
                  </div>
                </Button>
                <Button variant="outline-light coupon-button d-flex">
                  <div className="coupon-button-img">
                    <img src="https://i.imgur.com/7H3PmHB.png" />
                  </div>
                  <div className="justify-content-start text-start p-2 ms-4 text-white coupon-p">
                    <h5>社會科學精選</h5>
                    <h4>$50</h4>
                    <p>2022-12-31</p>
                    <p>w8mGRDuE</p>
                  </div>
                </Button>
                <Button variant="outline-light coupon-button d-flex">
                  <div className="coupon-button-img">
                    <img src="https://i.imgur.com/v0wH1GX.png" />
                  </div>
                  <div className="justify-content-start text-start p-2 ms-4 text-white coupon-p">
                    <h5>生活風格精選</h5>
                    <h4>$50</h4>
                    <p>2023-01-31</p>
                    <p>FSLfVDxP</p>
                  </div>
                </Button>
                <Button variant="outline-light coupon-button d-flex">
                  <div className="coupon-button-img">
                    <img src="https://i.imgur.com/EK5R7cM.png" />
                  </div>
                  <div className="justify-content-start text-start p-2 ms-4 text-white coupon-p">
                    <h5>藝術設計精選</h5>
                    <h4>$50</h4>
                    <p>2023-02-28</p>
                    <p>8VJjIPT1</p>
                  </div>
                </Button>
                <Button variant="outline-light coupon-button d-flex">
                  <div className="coupon-button-img">
                    <img src="https://i.imgur.com/oAdDmLt.png" />
                  </div>
                  <div className="justify-content-start text-start p-2 ms-4 text-white coupon-p">
                    <h5>自然科普精選</h5>
                    <h4>$50</h4>
                    <p>2023-03-31</p>
                    <p>qynDWTG7</p>
                  </div>
                </Button>
                <Button variant="outline-light coupon-button d-flex">
                  <div className="coupon-button-img">
                    <img src="https://i.imgur.com/NgMYBqx.png" />
                  </div>
                  <div className="justify-content-start text-start p-2 ms-4 text-white coupon-p">
                    <h5>旅遊觀光精選</h5>
                    <h4>$50</h4>
                    <p>2023-04-30</p>
                    <p>w5C3qYza</p>
                  </div>
                </Button>
                <Button variant="outline-light coupon-button d-flex">
                  <div className="coupon-button-img">
                    <img src="https://i.imgur.com/AUSFMkY.png" />
                  </div>
                  <div className="justify-content-start text-start p-2 ms-4 text-white coupon-p">
                    <h5>醫療保健精選</h5>
                    <h4>$50</h4>
                    <p>2023-05-31</p>
                    <p>igaUz4Fw</p>
                  </div>
                </Button>

                <Button variant="outline-light coupon-button d-flex">
                  <div className="coupon-button-img">
                    <img src="https://i.imgur.com/d4cV7Sk.png" />
                  </div>
                  <div className="justify-content-start text-start p-2 ms-4 text-white coupon-p">
                    <h5>勵志成長精選</h5>
                    <h4>$50</h4>
                    <p>2022-06-30</p>
                    <p>XTAgL4C3</p>
                  </div>
                </Button>
                <Button variant="outline-light coupon-button d-flex">
                  <div className="coupon-button-img">
                    <img src="https://i.imgur.com/NgMYBqx.png" />
                  </div>
                  <div className="justify-content-start text-start p-2 ms-4 text-white coupon-p">
                    <h5>新書限時優惠</h5>
                    <h4>$75</h4>
                    <p>2023-07-31</p>
                    <p>cXwazPe5</p>
                  </div>
                </Button>
              </div>
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CouponModal
