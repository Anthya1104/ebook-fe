import React from 'react'
import '../style/Login.scss'

import EbookBg from '../img/ebook-bg2.png'
import EbookLogo from '../img/EK-logo-final.png'

function Login() {
  return (
    <>
      <div className="container-xxl d-flex-column justify-context-center">
        <div className="login-area">
          <div className=" row">
            <div className="Login-form-area col-md-8">123</div>
            <div className="Login-background-area position-relative col-md-4">
              <img
                className="Login-ebk-bg Login-cover-fit"
                alt="ebk-bg"
                src={EbookBg}
              />
              <div className="Login-ebk-logo position-absolute">
                <img className="cover-fit " alt="ebk-logo" src={EbookLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
