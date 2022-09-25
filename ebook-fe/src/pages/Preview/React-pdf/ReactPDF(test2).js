import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Pdf from './Tigra.pdf'

export default () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  // pdf加载成功
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }
  return (
    <Document
      file={Pdf} // 文件地址
      className="pdf-viewer-show"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} scale={1.8} />
    </Document>
  )
}
