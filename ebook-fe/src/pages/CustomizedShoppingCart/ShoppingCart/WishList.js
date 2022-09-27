import { useCart } from '../utils/useCart'
import { useSecondCart } from '../utils/useSecondCart'
import LinkItems from './components/LinkItems'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// 因ListItemsWithProps綁定useCart使用，
// 這裡要改用傳入props的方式來呈現清單
import ListItemsWithProps from './components/ListItemsWithProps'

function WishList(props) {
  const firstCart = useCart()
  const secondCart = useSecondCart()
  let navigate = useNavigate()
  const handleClick = (path) => () => {
    navigate(path)
  }

  return (
    <>
      <h1>我的收藏</h1>
      {/* <p className="text-nowrap bd-highlight">
        /pages/ShoppingCart/MultipleCart.js
      </p>
      <div className="alert alert-warning" role="alert">
        註: 請見 README.md 中說明，不同購物車需要有各別的 ContextProvider 和
        hook。
      </div> */}

  
      <div>
        <ListItemsWithProps
          cart={secondCart.cart}
          items={secondCart.items}
          plusOne={secondCart.plusOne}
          minusOne={secondCart.minusOne}
          removeItem={secondCart.removeItem}
        />
      </div>

      {/* <Link to={'/Cart/Product-List'}> */}
      <div className="d-flex justify-content-end mb-5">
        <button
          type="button"
          className="btn btn-primary-reverse me-3"
          onClick={handleClick('/Cart/product-list')}
        >
          繼續購物
        </button>

        
      </div>
      {/* </Link> */}
    </>
  )
}

export default WishList
