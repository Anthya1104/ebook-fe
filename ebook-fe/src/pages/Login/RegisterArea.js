import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../utils/config'

function RegisterArea() {
  const [member, setMember] = useState({})
  const onChangeHandler = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value })
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let response = await axios.post(`${API_URL}/auth/register`, member)
      console.log(response.data)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <form className="d-flex flex-column align-items-center m-2">
        <input
          className="Login-input-text"
          type="text"
          name="name"
          value={member.name}
          placeholder="請輸入姓名"
          required
          onChange={onChangeHandler}
        />
        <input
          className="Login-input-text"
          type="text"
          name="account"
          value={member.account}
          placeholder="請輸入帳號"
          required
          onChange={onChangeHandler}
        />

        <input
          className="Login-input-text"
          type="password"
          name="password"
          value={member.password}
          placeholder="請輸入密碼"
          required
          onChange={onChangeHandler}
        />

        <input
          className="Login-input-text"
          type="password"
          name="confirmPassword"
          value={member.confirmPassword}
          placeholder="再次輸入密碼"
          required
          onChange={onChangeHandler}
        />

        <button
          className="Login-input-button"
          type="submit"
          value="送出"
          onClick={onSubmitHandler}
        >
          送出
        </button>
      </form>
    </>
  )
}

export default RegisterArea
