import './OrderApp.css'

function OrderApp() {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="#" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">訂單編號</p>
              <p className="card-text">訂單狀態:</p>
              <p className="card-text">訂單日期:</p>
              <p className="card-text">商品數量:</p>
              <h5 className="card-title">尚未評價</h5>
              <h5 className="card-title">訂單總額</h5>
              <a href="#" className="btn btn-primary">
                完整訂單
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderApp
