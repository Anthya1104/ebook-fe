import React from 'react'
import { useLocation } from 'react-router-dom'

function Preview() {
  const { state } = useLocation()
  const { data } = state
  console.log(data)
  return (
    <>
      <div ckassName="test">PreviewTest</div>
    </>
  )
}

export default Preview
