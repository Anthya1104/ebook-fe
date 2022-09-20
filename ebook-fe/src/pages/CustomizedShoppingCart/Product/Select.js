import ListGroup from 'react-bootstrap/ListGroup'
import './Select.scss'

function DefaultExample({ cat, setCat }) {
  return (
    <div>
      <h4>篩選條件</h4>
      <ListGroup className="product-select mb-4">
        <ListGroup.Item className="product-title">價格</ListGroup.Item>
        <ListGroup.Item>
          <a href="#">100元 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">101元~200元 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">201元~300元 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">300元以上 </a>
        </ListGroup.Item>
      </ListGroup>

      <ListGroup className="product-select mb-4">
        <ListGroup.Item className="product-title">分類</ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCat('商業理財')
            }}
          >
            商業理財
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCat('文學小說')
            }}
          >
            文學小說
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#"
          >社會科學 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">生活風格 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">藝術設計 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">自然科普 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">旅遊觀光 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">醫療保健 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">勵志成長 </a>
        </ListGroup.Item>
      </ListGroup>

      <ListGroup className="product-select">
        <ListGroup.Item className="product-title">出版社</ListGroup.Item>
        <ListGroup.Item>
          <a href="#">閱閱出版社 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">時代雜誌 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">蘋果日報 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">博客來書店 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">誠品書局</a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default DefaultExample
