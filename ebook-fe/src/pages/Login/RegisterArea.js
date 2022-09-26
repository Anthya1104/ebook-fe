import React from 'react'

function RegisterArea() {
  return (
    <>
      <form className="d-flex flex-column align-items-center m-2">
        <input
          className="Login-input-text"
          type="text"
          name="text"
          placeholder="請輸入姓名"
        />
        <input
          className="Login-input-text"
          type="email"
          name="email"
          placeholder="請輸入信箱"
        />

        <input
          className="Login-input-text"
          type="password"
          name="password"
          placeholder="請輸入密碼"
        />

        <input
          className="Login-input-text"
          type="password"
          name="confirmPassword"
          placeholder="再次輸入密碼"
        />

        <input className="Login-input-button" type="submit" value="送出" />
      </form>
    </>
  )
}

export default RegisterArea
