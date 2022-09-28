import ListGroup from 'react-bootstrap/ListGroup'
import './Select.scss'

function SelectPublisher({ searchPublisher, setSearchPublisher }) {
  return (
    <div>
      <ListGroup className="product-select">
        <ListGroup.Item className="product-title">出版社</ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setSearchPublisher('')
            }}
          >
            全部
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setSearchPublisher('閱閱出版社')
            }}
          >
            閱閱出版社{' '}
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#"
          onClick={(e) => {
              e.preventDefault()
              setSearchPublisher('人文出版')
            }}
          >人文出版</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#"
          onClick={(e) => {
              e.preventDefault()
              setSearchPublisher('三棵樹文化')
            }}
          >三棵樹文化 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#"
          onClick={(e) => {
              e.preventDefault()
              setSearchPublisher('中新書局')
            }}
          >中新書局 </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#"
          onClick={(e) => {
              e.preventDefault()
              setSearchPublisher('閱書局')
            }}
          >閱書局</a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default SelectPublisher
