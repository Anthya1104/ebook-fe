import React from 'react'
import MOCK_BOOK_IMG from '../../../img/mockdata/book.png'
import './Products.scss'
import Select from '../Select/Select'
import ProductCard from '../../../Component/ProductCard/ProductCard'

import { Link } from 'react-router-dom'
import Search from '../Search/Search'

function Products() {
  // TODO: MOCK DATA，接 api 之後移除
  const MOCK_PRODUCTS = [
    {
      id: 1,
      img: MOCK_BOOK_IMG,
      author: '法蘭西斯‧西里洛',
      name: '間歇高效率的番茄工作法',
      price: 999,
    },
    {
      id: 2,
      img: MOCK_BOOK_IMG,
      author: '法蘭西斯‧西里洛',
      name: '間歇高效率的番茄工作法',
      price: 189,
    },
    {
      id: 3,
      img: MOCK_BOOK_IMG,
      author: '法蘭西斯‧西里洛',
      name: '間歇高效率的番茄工作法',
      price: 189,
    },
    {
      id: 4,
      img: MOCK_BOOK_IMG,
      author: '法蘭西斯‧西里洛',
      name: '間歇高效率的番茄工作法',
      price: 189,
    },
    {
      id: 5,
      img: MOCK_BOOK_IMG,
      author: '法蘭西斯‧西里洛',
      name: '間歇高效率的番茄工作法',
      price: 189,
    },
    {
      id: 6,
      img: MOCK_BOOK_IMG,
      author: '法蘭西斯‧西里洛',
      name: '間歇高效率的番茄工作法',
      price: 189,
    },
    {
      id: 7,
      img: MOCK_BOOK_IMG,
      author: '哈哈',
      name: '呵呵呵呵',
      price: 189,
    },
  ]
  return (
    <>
      {/* <div>hello</div> */}
      <div className="Products">
        {/* <Link className="mx-2" to="/Mart/SearchResult">
        Search
      </Link> */}

        <Select />
        <div className="Product-list">
          {MOCK_PRODUCTS.map(({ id, img, author, name, price }) => (
            <div className="Product-list-card" key={id}>
              <ProductCard
                id={id}
                img={img}
                author={author}
                name={name}
                price={price}
              />
            </div>
          ))}
        </div>
        {/* <Search /> */}
      </div>
    </>
  )
}

export default Products
