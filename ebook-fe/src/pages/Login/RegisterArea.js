import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../utils/config'

// reactToastify importing
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function RegisterArea() {
  // toast
  const notify = () =>
    toast.info('註冊成功', {
      className: 'Bookshelf-toast-black-background',
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  const [member, setMember] = useState({})
  const onChangeHandler = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value })
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let response = await axios.post(`${API_URL}/auth/register`, member)
      console.log(response.status)
    } catch (e) {
      console.error(e)
    }
    setMember({
      ...member,
      name: '',
      account: '',
      password: '',
      confirmPassword: '',
    })
    notify()
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
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default RegisterArea
