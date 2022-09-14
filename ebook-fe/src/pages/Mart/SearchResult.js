// import React from 'react'
// import { Link } from 'react-router-dom'
// import Dropdown from './Dropdown'
// import TopCategory from './TopCategory/TopCategory'

// function SearchResult() {

//   return (
//     <>
//       <div>Searched Products</div>
//       <Link className="mx-2" to="/Mart">
//         Back to Products
//       </Link>

//       {/* <Dropdown />
//       <TopCategory /> */}
//     </>
//   )
// }

// export default SearchResult

import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import TopCategory from './TopCategory/TopCategory'
import Select from './Select/Select'
// import ProductCard from '../../Component/ProductCard/ProductCard'
import ProductCard from '../../components/ProductCard/ProductCard'
import MOCK_BOOK_IMG from '../../img/mockdata/book.png'
import './SearchResult.scss'

function SearchResult() {
  const MOCK_PRODUCTS = [
    {
      id: 1,
      img: MOCK_BOOK_IMG,
      author: '法蘭西斯‧西里洛',
      name: '間歇高效率的番茄工作法',
      price: 189,
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
      name: 'ㄏㄏ',
      price: 189,
    },
  ]
  return (
    <>
    
      <div className="SearchResult-outer d-flex mt-5">
        {/* 左側 */}
        <div className="SearchResult-left">
          <Select />
        </div>

        {/* 右側 */}
        <div className="SearchResult-right flex-wrap">
          <div className="d-flex justify-content-between px-4 pb-5">
            <div>搜尋「xxx」找到 x 筆資料</div>
            <div>
              <Dropdown />
            </div>
          </div>
          <div className="SearchResult-list d-flex flex-wrap">
            {MOCK_PRODUCTS.map(({ id, img, author, name, price }) => (
              <div className="SearchResult-card" key={id}>
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
        </div>
      </div>
    </>
  )
}

export default SearchResult
