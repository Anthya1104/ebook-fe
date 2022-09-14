import React from 'react'
import Button from 'react-bootstrap/Button'

function BtnPrimaryReverse(inputText) {
  return (
    <>
      <div className="mb-2">
        <Button className="btn btn-primary-reverse">{inputText}</Button>
      </div>
    </>
  )
}

export default BtnPrimaryReverse
