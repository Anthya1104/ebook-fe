import Dropdown from 'react-bootstrap/Dropdown'

function DropdownSelect() {
  return (
    <div className="ProductList-select-dropdown mt-2">
      <Dropdown>
        <Dropdown.Toggle
        className='me-3 ProductList-mobile-btn'
        variant="primary" id="dropdown-basic">
          價格
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">全部</Dropdown.Item>
          <Dropdown.Item href="#/action-2">100元</Dropdown.Item>
          <Dropdown.Item href="#/action-3">101元~200元</Dropdown.Item>
          <Dropdown.Item href="#/action-4">201元~300元</Dropdown.Item>
          <Dropdown.Item href="#/action-5">30元以上</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle 
        className='ProductList-mobile-btn'
        variant="primary" id="dropdown-basic">
          出版社
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">全部</Dropdown.Item>
          <Dropdown.Item href="#/action-2">閱閱出版社</Dropdown.Item>
          <Dropdown.Item href="#/action-3">人文出版</Dropdown.Item>
          <Dropdown.Item href="#/action-4">三棵樹文化</Dropdown.Item>
          <Dropdown.Item href="#/action-5">中新書局</Dropdown.Item>
          <Dropdown.Item href="#/action-6">閱書局</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DropdownSelect
