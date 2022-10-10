import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      商品排序
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">出版日期新到舊</Dropdown.Item>
        <Dropdown.Item href="#/action-2">出版日期舊到新</Dropdown.Item>
        <Dropdown.Item href="#/action-3">價格低到高</Dropdown.Item>
        <Dropdown.Item href="#/action-3">價格高到低</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;