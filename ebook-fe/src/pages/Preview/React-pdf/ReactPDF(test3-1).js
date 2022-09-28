import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Pdf from './ES6-in-depth-1-32.pdf'
import LeftIcon from '../../../img/left-arrow.png'
import RightIcon from '../../../img/right-arrow.png'

function App() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(8)
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet)
  }

  function changePageBack() {
    changePage(-2)
  }

  function changePageNext() {
    changePage(+2)
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {pageNumber > 0 && (
          <button
            style={{
              border: 'none',
            }}
            onClick={changePageBack}
          >
            <img src={LeftIcon} alt="" />
          </button>
        )}
        <Document file={Pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Page pageNumber={pageNumber} />
            <Page pageNumber={pageNumber + 1} />
          </div>
        </Document>

        {pageNumber < numPages && (
          <button
            style={{
              border: 'none',
            }}
            onClick={changePageNext}
          >
            <img src={RightIcon} alt="" />
          </button>
        )}
      </div>
      <div
        style={{ background: '#661f1e', color: '#efd3ce', textAlign: 'center' }}
      >
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <h6>第一章 &nbsp;&nbsp; 技巧1 &nbsp;&nbsp; 不懂就發問</h6>
      </div>
    </div>
  )
}
export default App
