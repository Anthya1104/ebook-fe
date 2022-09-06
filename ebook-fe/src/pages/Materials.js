import React from 'react'

function Materials() {
  return (
    <>
      <div className="m-3">
        <h1>Materials</h1>
        <hr />
        <div className="d-flex justify-content-left m-2">
          <div className="d-flex flex-column">
            <h2>Text</h2>
            <div className="d-flex m-2">
              <h1 className="p-2">H1</h1>
              <h2 className="p-2">H2</h2>
              <h3 className="p-2">H3</h3>
              <h4 className="p-2">H4</h4>
              <h5 className="p-2">H5</h5>
              <h6 className="p-2">H6</h6>
            </div>
          </div>
        </div>
        <hr />
        <h2>buttons</h2>
        <div className="d-flex flex-column">
          <div className="d-flex my-3">
            <h3 className="mx-4">.btn-primary</h3>
            <button className="btn btn-primary">btn-primary</button>
          </div>
          <div className="d-flex my-3">
            <h3 className="mx-4">.btn-primary-reverse(購物車/收藏toggle)</h3>
            {/* toggle作法 : https://react.school/ui/button (button toggle) */}
            <button className="btn btn-primary-reverse active">
              btn-primary-reverse
            </button>
          </div>
          <div className="d-flex my-3">
            <h3 className="mx-4">.btn-light</h3>
            <button className="btn btn-light">btn-light</button>
          </div>
          <div className="d-flex my-3">
            <h3 className="mx-4">.btn-danger</h3>
            <button className="btn btn-danger">btn-danger</button>
          </div>
          <div className="d-flex my-3">
            <h3 className="mx-4">product-category</h3>
            <button className="btn product-category">
              <div className="d-flex flex-column my-2">
                <svg
                  width="56"
                  height="50"
                  viewBox="0 0 56 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9876 2.03239C18.1126 2.90739 17.8938 3.47614 18.0251 5.00739C18.1126 6.53864 18.3313 6.88864 19.1188 6.97614C19.9501 7.10739 20.1251 6.84489 20.3876 5.35739L20.6938 3.56364H28.0001H35.3064L35.6126 5.35739C35.8751 6.84489 36.0501 7.10739 36.8813 6.97614C37.6688 6.88864 37.8876 6.53864 37.9751 5.00739C38.1063 3.47614 37.8876 2.90739 37.0126 2.03239C35.9188 0.938635 35.8751 0.938635 28.0001 0.938635C20.1251 0.938635 20.0813 0.938635 18.9876 2.03239Z"
                    fill="white"
                  />
                  <path
                    d="M2.3625 10.1259C0.39375 10.9134 0 12.1822 0 17.5634C0 22.8134 0.35 23.9947 2.14375 25.0009C2.58125 25.2197 6.95625 26.3134 11.8562 27.3634C16.7563 28.4572 21.2188 29.4634 21.7875 29.5947C22.6187 29.8134 22.75 30.1197 22.75 31.7384C22.75 35.1072 22.7062 35.0634 28 35.0634C33.2938 35.0634 33.25 35.1072 33.25 31.7384C33.25 30.1197 33.3812 29.8134 34.2562 29.5947C34.7812 29.4634 39.2437 28.4572 44.1437 27.3634C49.0438 26.3134 53.4188 25.2197 53.8563 25.0009C55.65 23.9947 56 22.8572 56 17.4759C56 12.7072 55.9125 12.2697 54.95 11.1322L53.9 9.9072L28.5688 9.8197C14.6562 9.77595 2.84375 9.9072 2.3625 10.1259ZM53.2875 17.4759C53.4188 22.2447 53.375 22.3759 52.4125 22.8134C51.3625 23.2509 33.6 27.2759 33.4688 27.0572C33.425 27.0134 33.1187 26.5322 32.8563 25.9634C32.375 25.0447 32.0687 25.0009 28 25.0009C23.9312 25.0009 23.625 25.0447 23.1437 26.0072C22.8813 26.5322 22.575 27.0134 22.5312 27.0572C22.4 27.2759 4.6375 23.2509 3.63125 22.8134C2.66875 22.4197 2.625 22.1572 2.625 17.6509C2.625 15.0259 2.75625 12.7509 2.93125 12.6197C3.0625 12.4447 14.4375 12.3572 28.175 12.4009L53.1562 12.5322L53.2875 17.4759ZM30.625 30.0322V32.4384H28H25.375V30.0322V27.6259H28H30.625V30.0322Z"
                    fill="white"
                  />
                  <path
                    d="M1.61875 27.9322C1.44375 28.0635 1.3125 32.3947 1.3125 37.4697V46.7447L2.45 47.926L3.63125 49.0635H28H52.3687L53.55 47.8822L54.6875 46.7447L54.6 37.2947C54.4688 27.8885 54.4688 27.8447 53.5062 27.7135C52.9375 27.626 52.4562 27.626 52.4125 27.7135C52.3687 27.801 52.2375 31.9572 52.1063 37.0322L51.8438 46.2197H28H4.15625L3.89375 37.0322C3.7625 31.9572 3.63125 27.801 3.5875 27.7135C3.4125 27.4947 1.88125 27.626 1.61875 27.9322Z"
                    fill="white"
                  />
                </svg>
                btn-danger
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Materials
