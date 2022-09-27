import '../style/Footer.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import line from '../img/footer_line.svg'
import information from '../img/information.svg'
import cooperation from '../img/cooperation.svg'
import service from '../img/service2.svg'
import social from '../img/social.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from 'mdb-react-ui-kit'
import '../style/Footer.scss'

function Footer() {
  return (
    <>
      <div className="footer">
        <MDBFooter className="text-center" color="white" bgColor="primary">
          <MDBContainer className="p-4">
            {/* <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section> */}
            <section className="">
              <MDBRow>
                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-1">
                    <img src={information} alt="" />
                    &nbsp;&nbsp;缺Ebook
                  </h5>
                  <img className="mb-3" src={line} alt="" />

                  <ul className="list-unstyled mb-3">
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        關於我們
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        全站活動
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        隱私權政策
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        會員使用條款
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-1">
                    <img src={cooperation} alt="" />
                    &nbsp;&nbsp;合作提案
                  </h5>
                  <img className="mb-3" src={line} alt="" />

                  <ul className="list-unstyled mb-3">
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        廣告合作
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        異業合作
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        加入電子書供應商
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        行銷分紅夥伴計畫
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-1">
                    <img src={service} alt="" />
                    &nbsp;&nbsp;顧客服務
                  </h5>
                  <img className="mb-3" src={line} alt="" />

                  <ul className="list-unstyled mb-3">
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        訂單查詢
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        付款方式
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        常見Q&A
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#!" className="text-white text-decoration-none">
                        客服信箱
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-1">
                    {/* <img src={social} alt=""/> */}
                    <FontAwesomeIcon
                      icon="fa-brands fa-facebook-messenger"
                      style={{ color: 'F9BF29' }}
                    />
                    &nbsp;&nbsp;社群連結
                  </h5>
                  <img className="mb-3" src={line} alt="" />

                  <ul className="list-unstyled mb-3">
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-line" />
                        </h3>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-telegram" />
                        </h3>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-facebook" />
                        </h3>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </h3>
                      </a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>
          <div
            className="text-center p-3"
            // style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            © 2022 - all rights reserved
          </div>
        </MDBFooter>
      </div>
    </>
  )
}
export default Footer
