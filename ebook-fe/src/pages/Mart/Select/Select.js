import ListGroup from 'react-bootstrap/ListGroup'
import './Select.scss'

function DefaultExample() {
  return (
    <div>
      <h4>篩選條件</h4>
      <ListGroup className="Mart-select mb-4">
        <ListGroup.Item className="Mart-title">價格</ListGroup.Item>
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

      <ListGroup className="Mart-select mb-4">
        <ListGroup.Item className="Mart-title">分類</ListGroup.Item>
        <ListGroup.Item>
          <a href="#">商業理財 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">文學小說 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">社會科學 </a>
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

      <ListGroup className="Mart-select">
        <ListGroup.Item className="Mart-title">出版社</ListGroup.Item>
        <ListGroup.Item>
          <a href="#">出版社1 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">出版社2 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">出版社3 </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default DefaultExample
