import React, { useState, useEffect } from 'react'
import '../../style/Login.scss'

import LoginArea from './LoginArea'
import RegisterArea from './RegisterArea'

import EbookBg from '../../img/ebook-bg2.png'
import EbookLogo from '../../img/EK-logo-final.png'

function Login() {
  const [logRegSwitcher, setLogRegSwitcher] = useState('login')

  const SwitchLogReg = (e) => {
    setLogRegSwitcher(e.target.className)
  }
  const createTab = () => {
    return (
      <>
        <div className="Login-container">
          <button
            className={
              logRegSwitcher === 'login' ? 'Login-tabs-active' : 'Login-tabs'
            }
            onClick={SwitchLogReg}
          >
            <p className="login">登入</p>
          </button>
          <button
            className={
              logRegSwitcher === 'register' ? 'Login-tabs-active' : 'Login-tabs'
            }
            onClick={SwitchLogReg}
          >
            <p className="register">註冊</p>
          </button>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="container-xxl d-flex-column justify-context-center">
        <div className="login-area">
          <div className=" row">
            <div className="Login-form-area col-md-8">
              <div className="Login-card">
                {createTab()}
                {logRegSwitcher === 'login' ? <LoginArea /> : <RegisterArea />}
              </div>
            </div>
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
