import React, { useState, useEffect } from 'react'
import { Navigate, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../utils/config'
import { useAuth } from '../../../Context/auth'

function OwnedBookDetail() {
  // 從 auth context 拿 member, setMember
  const { member, setMember } = useAuth()
  const { ownedBookId } = useParams()
  const [updateDone, setUpdateDone] = useState(false)

  console.log(member)
  // post update Data
  useEffect(() => {
    const UpdateBook = async () => {
      try {
        let response = await axios.post(
          `${API_URL}/bookshelf/update-recent-book?id=${ownedBookId}`,
          {},
          {
            withCredentials: true,
          }
        )
        setUpdateDone(true)
        // console.log('成功', response)
      } catch (e) {
        console.error(e)
      }
    }
    UpdateBook()
  }, [])

  const PreviewNavigator = () => {
    return (
      <>
        <Navigate to="/Preview" />
      </>
    )
  }

  return (
    <>
      {/* TODO: 在這一頁 update 後 Navigate */}

      {updateDone ? (
        <>
          <Navigate to="/Preview" state={{ ownedBookId }} />
        </>
      ) : (
        <></>
      )}

      <div>BookDetail:{ownedBookId}</div>
      <Link className="mx-2" to="/Member/bookshelf">
        Back to bookshelf
      </Link>
    </>
  )
}

export default OwnedBookDetail
