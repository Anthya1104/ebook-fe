import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-primary-reverse my-5" onClick={handleShow}>
        確定付款
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton> */}
          <Modal.Title></Modal.Title>
        {/* </Modal.Header> */}
        <Modal.Body>訂單已成立</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="btn co-btn" onClick={handleClose}>
            關閉
          </Button> */}
          <Link to="product-list">
          <Button variant="btn btn-primary-reverse" onClick={handleClose}>
            回到商品列表
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);
export default Example