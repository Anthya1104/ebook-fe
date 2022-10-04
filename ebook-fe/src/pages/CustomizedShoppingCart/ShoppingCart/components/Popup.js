import axios from 'axios'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import { API_URL } from '../../utils/config'
import { useAuth } from '../../../../Context/auth'

function Example(props) {
  const { member, setMember } = useAuth()
  let memberId = member.id
  console.log('checkout', member)
  const { items } = props
  console.log(items)
  let newItems = items.map((items) => items.id)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // TODO 記得彈出訊息
  const handleOrder = async () => {
    try {
      const result = await axios.post(
        `${API_URL}/market/cart-list`,
        {
          items,
          memberId,
        },
        {
          withCredentials: true,
        }
      )
      console.log(result.data)
      handleShow()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <Button
        variant="btn btn-primary-reverse my-5 ShoppingCart-btn-border-radius"
        onClick={() => {
          handleOrder()
          localStorage.clear()
        }}
      >
        確定付款
      </Button>
      。
      <Modal show={show} onHide={handleClose}>
        <Modal.Title></Modal.Title>
        <Modal.Body className="Popup-text-style my-4">訂單已成立</Modal.Body>
        <Modal.Footer>
          <Link to="product-list">
            <Button
              variant="btn btn-primary-reverse ShoppingCart-btn-border-radius"
              onClick={handleClose}
            >
              回到商品列表
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

// render(<Example />);
export default Example
