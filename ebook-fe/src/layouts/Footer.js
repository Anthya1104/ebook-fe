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
      <div className="footer-lg d-xl-block d-lg-block d-xxl-block d-md-block d-sm-none">
        <MDBFooter className="text-center" color="white" bgColor="primary">
          <MDBContainer className="p-4">
            <section className="">
              <MDBRow className="footer-row d-flex">
                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-1 footer-bb h6">
                    <img src={information} alt="" />
                    &nbsp;&nbsp;缺Ebook
                  </h5>
                  {/* line */}
                  <img className="mb-1 footer-img" src={line} alt="" />
                  {/* line */}
                  {/* <img className="mb-1" src={line} alt="" /> */}

                  <ul className="list-unstyled mb-1">
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        關於我們
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        全站活動
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        隱私權政策
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        會員使用條款
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-1 footer-bb h6">
                    <img src={cooperation} alt="" />
                    &nbsp;&nbsp;合作提案
                  </h5>
                  {/* line */}
                  <img className="mb-1 footer-img" src={line} alt="" />
                  {/* line */}
                  {/* <img className="mb-1" src={line} alt="" /> */}

                  <ul className="list-unstyled mb-1">
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        廣告合作
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        異業合作
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        加入電子書供應商
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        行銷分紅夥伴計畫
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-1 footer-bb h6">
                    <img src={service} alt="" />
                    &nbsp;&nbsp;顧客服務
                  </h5>
                  {/* line */}
                  <img className="mb-1 footer-img" src={line} alt="" />
                  {/* line */}
                  {/* <img className="mb-1" src={line} alt="" /> */}

                  <ul className="list-unstyled mb-1">
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        訂單查詢
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        付款方式
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        常見Q&A
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        客服信箱
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-1  footer-b h6">
                    <img src={social} alt="" />
                    {/* <FontAwesomeIcon
                      icon="fa-brands fa-facebook-messenger"
                      style={{ color: 'F9BF29' }}
                    /> */}
                    &nbsp;&nbsp;社群連結
                  </h5>
                  {/* line */}
                  <img className="mb-1 footer-img" src={line} alt="" />
                  {/* <ul className="list-unstyled mb-1">
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none footer-text">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-line" />
                        </h3>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none footer-text">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-telegram" />
                        </h3>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none footer-text">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-facebook" />
                        </h3>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none footer-text">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </h3>
                      </a>
                    </li>
                  </ul> */}
                  <div className="d-flex justify-content-evenly h2">
                    <a href="#!" className="text-white text-decoration-none">
                      <FontAwesomeIcon icon="fa-brands fa-line" />
                    </a>
                    <a href="#!" className="text-white text-decoration-none ">
                      <FontAwesomeIcon icon="fa-brands fa-telegram" />
                    </a>
                    <a href="#!" className="text-white text-decoration-none ">
                      <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    </a>
                    <a href="#!" className="text-white text-decoration-none ">
                      <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    </a>
                  </div>
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

      <div className="footer-sm d-xl-none d-lg-none d-xxl-none d-md-none">
        <MDBFooter
          className="text-center footer"
          color="white"
          bgColor="primary"
        >
          <MDBContainer className="py-4">
            <div className="d-flex  justify-content-center">
              <MDBRow className="d-flex" md="6">
                <MDBCol md="6" className="mb-4 mb-md-0 footer-height">
                  <h5 className="text-uppercase mb-1 footer-bb h6">
                    <img src={information} alt="" />
                    &nbsp;&nbsp;缺Ebook
                  </h5>
                  {/* line */}
                  <img className="mb-1 footer-img" src={line} alt="" />
                  {/* line */}
                  {/* <img className="mb-1" src={line} alt="" /> */}

                  <ul className="list-unstyled mb-1">
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        關於我們
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        全站活動
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        隱私權政策
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        會員使用條款
                      </a>
                    </li>
                  </ul>
                </MDBCol>
                <MDBCol md="6" className="mb-4 mb-md-0 footer-height">
                  <h5 className="text-uppercase mb-1 footer-bb h6">
                    <img src={cooperation} alt="" />
                    &nbsp;&nbsp;合作提案
                  </h5>
                  {/* line */}
                  <img className="mb-1 footer-img" src={line} alt="" />
                  {/* line */}
                  {/* <img className="mb-1" src={line} alt="" /> */}

                  <ul className="list-unstyled mb-1">
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        廣告合作
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        異業合作
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        加入電子書供應商
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        行銷分紅夥伴計畫
                      </a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
              <MDBRow className="footer-row d-flex" md="6">
                <MDBCol md="6" className="mb-4 mb-md-0 footer-height">
                  <h5 className="text-uppercase mb-1 footer-bb h6">
                    <img src={service} alt="" />
                    &nbsp;&nbsp;顧客服務
                  </h5>
                  {/* line */}
                  <img className="mb-1 footer-img" src={line} alt="" />
                  {/* line */}
                  {/* <img className="mb-1" src={line} alt="" /> */}

                  <ul className="list-unstyled mb-1">
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        訂單查詢
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        付款方式
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        常見Q&A
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#!"
                        className="text-white text-decoration-none footer-text"
                      >
                        客服信箱
                      </a>
                    </li>
                  </ul>
                </MDBCol>
                <MDBCol md="6" className="mb-4 mb-md-0 footer-height">
                  <h5 className="text-uppercase mb-1 footer-bb h6">
                    <img className="img-fluid" src={social} alt="" />
                    {/* <FontAwesomeIcon
                      icon="fa-brands fa-facebook-messenger"
                      style={{ color: 'F9BF29' }}
                    /> */}
                    &nbsp;&nbsp;社群連結
                  </h5>
                  {/* line */}
                  <img className="mb-1 footer-img" src={line} alt="" />
                  <div className="d-flex justify-content-evenly h2">
                    <a href="#!" className="text-white text-decoration-none ">
                      <FontAwesomeIcon icon="fa-brands fa-line" />
                    </a>
                    <a href="#!" className="text-white text-decoration-none ">
                      <FontAwesomeIcon icon="fa-brands fa-telegram" />
                    </a>
                    <a href="#!" className="text-white text-decoration-none ">
                      <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    </a>
                    <a href="#!" className="text-white text-decoration-none">
                      <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    </a>
                  </div>

                  {/* <ul className="list-unstyled mb-1">
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none footer-text">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-line" />
                        </h3>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none footer-text">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-telegram" />
                        </h3>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none footer-text">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-facebook" />
                        </h3>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-white text-decoration-none footer-text">
                        <h3 className="text-white">
                          <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </h3>
                      </a>
                    </li>
                  </ul> */}
                </MDBCol>
              </MDBRow>
            </div>
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
