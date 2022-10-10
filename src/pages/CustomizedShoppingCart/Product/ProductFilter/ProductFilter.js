import React, { useState } from 'react'
// import Categories from './ProductFilter'
import ProductFilterData from './ProductFilterData'
import Container from 'react-bootstrap/Container'

const Category = () => {
  const [data, setData] = useState(ProductFilterData)

  //Filter for category
  const filterResult = (catItem) => {
    const result = ProductFilterData.filter((curDate) => {
      return curDate.book_category === catItem
    })
    setData(result)
  }

  return (
    <>
      <Container>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="title">Filter by Category</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="btn"
                onClick={() => setData(ProductFilterData)}
              >
                All
              </button>
              <button className="btn" onClick={() => filterResult('商業理財')}>
                商業理財
              </button>
              <button className="btn" onClick={() => filterResult('文學小說')}>
                文學小說
              </button>
              <button className="btn" onClick={() => filterResult('社會科學')}>
                社會科學
              </button>
            </div>

            {/* <div className="row row-cols-1 row-cols-md-4 g-4"> */}
            {/* <div className="row"> */}
            <div className="row cards d-flex flex-wrap mt-4">
              {data.map((values) => {
                const { id, book_name, book_category } = values
                return (
                  <div className="col-3 mb-4" key={values.id}>
                    {/* 怎麼帶id??? */}
                    <div className="card ProductList-card">
                      {/* <Link to={'/Cart/ProductDetail/' + item.id}> */}
                      {console.log('/Cart/ProductDetail/' + values.id)}
                      <img
                        src={values.book_img}
                        className="card-img-top ProductList-card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title ProductList-bookname">
                          {values.book_name}
                        </h5>
                        <p className="card-text">
                          {/* <h5 className="card-title">{item.book_subtitle}</h5> */}
                          <h5 className="card-title ProductList-author">
                            {values.author}
                          </h5>
                          {/* 這裡只是放一些商品的描述說明。這裡只是放一些商品的描述說明。 */}
                        </p>
                        <p className="card-text text-danger">
                          $ {values.price}元
                        </p>
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
                )
              })}
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Category
