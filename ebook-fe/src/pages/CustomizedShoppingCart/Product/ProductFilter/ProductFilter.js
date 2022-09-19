import React, { useState } from 'react'
// import Categories from './ProductFilter'
import ProductFilterData from './ProductFilterData'

const Category = () => {
  const [data, setData] = useState(ProductFilterData)

  //Filter for category
  const filterResult = (catItem) => {
    const result = ProductFilterData.filter((curDate) => {
      return curDate.category === catItem
    })
    setData(result)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">Filter by Category</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn" onClick={() => setData(ProductFilterData)}>
              All
            </button>
            <button className="btn" onClick={() => filterResult('fiction')}>
              fiction
            </button>
            <button className="btn" onClick={() => filterResult('novel')}>
              novel
            </button>
          </div>
          <div className="col">
            <div className="cards">
              {data.map((values) => {
                const { id, book_name, book_category } = values
                return (
                  <>
                    <div className="card" key={id}>
                      {/* <div className="card-header">
                        <img src={image} alt={title} />
                      </div> */}
                      <div className="card-body">
                        <h2 className="titleProduct">{book_name}</h2>
                        <span className="price">{book_category}</span>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category
