import React, { useEffect } from 'react'
import { Navigate, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../utils/config'

function OwnedBookDetail() {
  const { ownedBookId } = useParams()

  // post update Data
  useEffect(() => {
    const UpdateBook = async () => {
      try {
        let response = await axios.post(
          `${API_URL}/bookshelf/update-recent-book?id=${ownedBookId}`
        )
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

      <div>BookDetail:{ownedBookId}</div>
      <Link className="mx-2" to="/Member/bookshelf">
        Back to bookshelf
      </Link>
    </>
  )
}

export default OwnedBookDetail
