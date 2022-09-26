import '../style/Footer.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine } from '@fortawesome/free-solid-svg-icons';
import { faBrands } from '@fortawesome/free-solid-svg-icons';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
  <>
   <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4 '>
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
        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>缺Ebook</h5>
            
              <ul className='list-unstyled mb-1'>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    關於我們
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    全站活動
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    隱私權政策
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    會員使用條款
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>合作提案</h5>

              <ul className='list-unstyled mb-1'>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                  廣告合作
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    異業合作
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                  加入電子書供應商
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    行銷分紅夥伴計畫
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>顧客服務</h5>

              <ul className='list-unstyled mb-1'>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    訂單查詢
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    付款方式
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    常見Q&A
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    客服信箱
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>社群連結</h5>

              <ul className='list-unstyled mb-1'>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    <FontAwesomeIcon icon="fa-brands fa-line" />Line
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    Telegram
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    {/* <BsFacebook />Facebook */}Facebook
                  </a>
                </li>
                <li className='mb-1'>
                  <a href='#!' className='text-white text-decoration-none'>
                    {/* <BsInstagram />Instagram */}Instagram
                  </a>
                </li>
              </ul>
            </MDBCol>

            
          </MDBRow>
        </section>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 - all rights reserved
      </div>
    </MDBFooter>

  </>
);
  }
export default Footer;
