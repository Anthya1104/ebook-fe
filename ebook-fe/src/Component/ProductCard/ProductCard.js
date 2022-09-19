import './ProductCard.scss'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, name, img, author, price }) => {
  // 商品列表卡片
  return (
    <Link to={`/Mart/ProductDetail/${id}`}>
      <div className="ProductCard">
        <img className="ProductCard-img" src={img} alt={name} />
        <div className="ProductCard-name">{name}</div>
        <div className="ProductCard-author">{author}</div>
        <div className="ProductCard-price">${price}</div>
      </div>
    </Link>
  )
}

export default ProductCard
