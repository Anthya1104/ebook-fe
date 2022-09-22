import ListGroup from 'react-bootstrap/ListGroup'
import './Select.scss'

function DefaultExample({ cat, setCat }) {
  return (
    <div>
      <h4 className='Select-title'>篩選條件</h4>
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

{/*       
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
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCat('社會科學')
            }}
          >
            社會科學
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCat('生活風格')
            }}
          >
            生活風格
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCat('藝術設計')
            }}
          >
            藝術設計
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCat('自然科普')
            }}
          >
            自然科普
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCat('旅遊觀光')
            }}
          >
            旅遊觀光
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
        <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCat('醫療保健')
            }}
          >
            醫療保健
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
        <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCat('勵志成長')
            }}
          >
            勵志成長
          </a>
        </ListGroup.Item>
      </ListGroup> */}

      <ListGroup className="product-select">
        <ListGroup.Item className="product-title">出版社</ListGroup.Item>
        <ListGroup.Item>
          <a href="#">閱閱出版社 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">人文出版</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">三棵樹文化 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">中新書店 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#">閱書局</a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default DefaultExample