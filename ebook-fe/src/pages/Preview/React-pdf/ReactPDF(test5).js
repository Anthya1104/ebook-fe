import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import WebViewer from '@pdftron/webviewer'
import Back from '../../../img/Preview2_back.png'
import './App.css'

const App = () => {
  const viewer = useRef(null)

  // if using a class, equivalent of componentDidMount
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/原子習慣.pdf',
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer, annotationManager, Annotations } = instance.Core

      documentViewer.addEventListener('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          X: 100,
          Y: 150,
          Width: 200,
          Height: 50,
          Author: annotationManager.getCurrentUser(),
        })

        annotationManager.addAnnotation(rectangleAnnot)
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotationManager.redrawAnnotation(rectangleAnnot)
      })
    })
  }, [])

  return (
    <div className="App">
      <div className="header">
        <Link to="/Member/bookshelf">
          <button className="headerButton">
            <img src={Back} alt="" />
          </button>
        </Link>
        原子習慣
      </div>
      <div>
        <div className="webviewer" ref={viewer}></div>
      </div>
    </div>
  )
}

export default App
