import React, { useState, useEffect } from 'react'
import { useAuth } from '../../Context/auth'
import axios from 'axios'
import { API_URL } from '../../utils/config'

function LoginArea() {
  // 從 auth context 拿 member, setMember
  // const { member, setMember } = useAuth()
  const [loginMember, setLoginMember] = useState({})
  const [isLogin, setIsLogin] = useState(false)

  const onChangeHandler = (e) => {
    setLoginMember({ ...loginMember, [e.target.name]: e.target.value })
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(loginMember)
    let response = await axios.post(`${API_URL}/auth/login`, loginMember, {
      // 為了可以跨源存取 cookie
      withCredentials: true,
    })
    console.log(response.data)
    // 把資料存進 context
    // setMember(response.data)
    setIsLogin(true)
  }
  return (
    <>
      <form className="d-flex flex-column align-items-center m-2">
        <input
          className="Login-input-text"
          type="text"
          name="account"
          value={loginMember.account}
          placeholder="請輸入帳號"
          onChange={onChangeHandler}
        />

        <input
          className="Login-input-text"
          type="password"
          name="password"
          value={loginMember.password}
          placeholder="請輸入密碼"
          onChange={onChangeHandler}
        />

        <button
          className="Login-input-button"
          type="button"
          value="送出"
          onClick={submitHandler}
        >
          送出
        </button>
      </form>
    </>
  )
}

export default LoginArea
