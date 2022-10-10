import React, { useState } from 'react'
// import { data } from '../SearchBar/SearchBar-data'
import data from '../../data/products.json'
// import { Link } from 'react-router-dom'

// import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { data } from './data.js';

function SearchBar(props) {
  const [contacts, setContacts] = useState(data)
  const [search, setSearch] = useState('')
  console.log(data)
  console.log(search)
  // const { searchWord, setSearchWord } = props

  return (
    <div>
      <Container>
        {/* <h1 className="text-center mt-4">Contact Keeper</h1> */}
        <Form>
          <InputGroup className="my-3">
            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search contacts"
            />
          </InputGroup>
        </Form>
        <div className="row row-cols-1 row-cols-md-4 g-4 ">
          {data
            .filter((item) => {
              return search == '' ? item : item.book_name.includes(search)
            })
            .map((item, index) => (
              <div className="col" key={item.id}>
                {/* 怎麼帶id??? */}
                <div className="card ProductList-card">
                  {/* <Link to={'/Cart/ProductDetail/' + item.id}> */}
                  {console.log('/Cart/ProductDetail/' + item.id)}
                  <img
                    src={item.book_img}
                    className="card-img-top ProductList-card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title ProductList-bookname">
                      {item.book_name}
                    </h5>
                    <p className="card-text">
                      {/* <h5 className="card-title">{item.book_subtitle}</h5> */}
                      <h5 className="card-title ProductList-author">
                        {item.author}
                      </h5>
                      {/* 這裡只是放一些商品的描述說明。這裡只是放一些商品的描述說明。 */}
                    </p>
                    <p className="card-text text-danger">$ {item.price}元</p>
                  </div>
                  {/* </Link> */}
                  <div className="card-footer">
                    <button
                      type="button"
                      className="btn  co-btn"
                      onClick={() => {
                        // 商品原本無數量屬性(quantity)，要先加上
                        const item = { ...item, quantity: 1 }
                        // 注意: 重覆加入會自動+1產品數量
                        // addItem(item)
                        // 呈現跳出對話盒
                        // showModal(item.name)
                      }}
                    >
                      加入購物車
                    </button>
                    <button className="btn  co-btn">加入收藏</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search == ''
                  ? item
                  : item.book_name.includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.book_name}</td>
                  <td>{item.author}</td>

                </tr>
              ))}
          </tbody>
        </Table> */}
      </Container>
    </div>
  )
}

export default SearchBar
