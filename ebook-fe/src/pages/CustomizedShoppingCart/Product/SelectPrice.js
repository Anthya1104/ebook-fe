import ListGroup from 'react-bootstrap/ListGroup'
import './Select.scss'

function SelectPrice({ searchBook, setSearchBook }) {
  return (
    <div>
      
      <ListGroup className="product-select mb-4">
        <ListGroup.Item className="product-title">價格</ListGroup.Item>
        <ListGroup.Item>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setSearchBook('ALL')
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
    </div>
  )
}

export default SelectPrice
