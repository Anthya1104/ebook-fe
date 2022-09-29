import { React, useState } from 'react'
import RecentBook from './Component/RecentBook'
import Button from 'react-bootstrap/Button'
import OwnedBooksList from './OwnedBooksList'
import BookReviesList from './BookReviewList'

function OwnedBooks() {
  // tab state
  const [bookToggleState, setbookToggleState] = useState(1)
  const [getRecentBookData, setGetRecentBookData] = useState([])
  return (
    <>
      <div className="d-flex-column justify-content-left vw-100">
        {/* <div>Book List</div> */}
        {console.log('getRecentBook', getRecentBookData)}
        {getRecentBookData.length === 0 ? (
          <></>
        ) : (
          <div className="Bookshelf-recent-title position-absolute top-50 end-0">
            <h2>最近閱讀</h2>
            <div>
              <svg
                width="670"
                height="12"
                viewBox="0 0 670 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM6 7L670 7.00006L670 5.00006L6 5L6 7Z"
                  fill="#661F1E"
                />
              </svg>
            </div>
          </div>
        )}

        <RecentBook setGetRecentBookData={setGetRecentBookData} />
        {/* 書櫃標題 */}

        {/* Bookshelf Tab Mobile */}
        <div className="Bookshelf-mobile-container d-flex justify-content-center">
          <Button
            className={
              bookToggleState === 1
                ? ' btn Bookshelf-mobile-tab active'
                : 'btn Bookshelf-mobile-tab'
            }
            onClick={() => {
              setbookToggleState(1)
            }}
          >
            <h5>我的書櫃</h5>
          </Button>
          <Button
            className={
              bookToggleState === 2
                ? ' btn Bookshelf-mobile-tab active'
                : 'btn Bookshelf-mobile-tab'
            }
            onClick={() => {
              setbookToggleState(2)
            }}
          >
            <h5>我的評論</h5>
          </Button>
        </div>

        <div className="Bookshelf-tabs d-flex-column py-3">
          {/* desktop category tab */}
          <div className="Bookshelf-desktop-tab m-2">
            <Button
              className={
                bookToggleState === 1
                  ? ' btn Bookshelf_category py-2 d-flex justify-content-end active'
                  : 'btn Bookshelf_category py-2 d-flex justify-content-end'
              }
              onClick={() => {
                setbookToggleState(1)
              }}
            >
              <h5>我的書櫃</h5>
            </Button>
            <Button
              className={
                bookToggleState === 2
                  ? ' btn Bookshelf_category py-2 d-flex justify-content-end active'
                  : 'btn Bookshelf_category py-2 d-flex justify-content-end'
              }
              onClick={() => {
                setbookToggleState(2)
              }}
            >
              <h5>我的評論</h5>
            </Button>
          </div>
          <div className="position-absolute Bookshelf-catagory-divider">
            <svg
              width="1039"
              height="12"
              viewBox="0 0 1039 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1038.77 5.99991L1033 0.226407L1027.23 5.99991L1033 11.7734L1038.77 5.99991ZM8.74228e-08 7L1033 6.99991L1033 4.99991L-8.74228e-08 5L8.74228e-08 7Z"
                fill="#661F1E"
              />
            </svg>
          </div>

          {bookToggleState === 1 ? <OwnedBooksList /> : <BookReviesList />}
        </div>
      </div>
    </>
  )
}

export default OwnedBooks
