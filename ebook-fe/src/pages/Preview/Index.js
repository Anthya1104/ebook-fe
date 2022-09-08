import React from 'react';
import styles from './Index.module.css';

function IconsStart() {
  return (
    <div className={styles.iconsStart}>
      <ul>
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
      </ul>
    </div>
  )
}

function Title() {
  return (
    <h6 className={styles.title}>
      聊不停的聰明問話術：【超圖解】40個開場 • 接話 •
      打破心防的問話技巧，不用找話題，90%的話都讓對方說
    </h6>
  )
}

function IconsEnd() {
  return (
    <div className={styles.iconsEnd}>
      <ul>
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
      </ul>
    </div>
  )
}

function Book() {
  return null
}

function Chapter() {
  return null
}

function Preview() {
  /**
   * -header
   *    -title
   *    -icons
   *
   * -mian
   *    -book
   *
   * -foot
   *    -chapter
   */
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <ul>
          <li>
            <IconsStart />
          </li>
        </ul>
        <Title />
        <ul>
          <li>
            <IconsEnd />
          </li>
        </ul>
      </header>
    </main>
  )
}

export default Preview
