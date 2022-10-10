import ListGroup from 'react-bootstrap/ListGroup'
import './Select.scss'

function Select(
  { searchBook, setSearchBook },
  { searchPublisher, setSearchPublisher }
) {
  return (
    <div>
      <h4 className="Select-title">篩選條件</h4>
      <ListGroup className="product-select mb-4">
        <ListGroup.Item className="product-title">價格</ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setSearchBook('A')
            }}
          >
            100元{' '}
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setSearchBook('B')
            }}
          >
            101元~200元{' '}
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setSearchBook('C')
            }}
          >
            201元~300元{' '}
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setSearchBook('D')
            }}
          >
            300元以上{' '}
          </a>
        </ListGroup.Item>
      </ListGroup>

      <ListGroup className="product-select">
        <ListGroup.Item className="product-title">出版社</ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setSearchPublisher('人文出版')
            }}
          >
            閱閱出版社{' '}
          </a>
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

export default Select
