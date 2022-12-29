import { Product } from "../../type"
import { Link } from "react-router-dom";
const ProductItems = (
{
  category,
  description,
  id,
  image,
  price,
  rating,
  title
}
: Product) => (
    <li className="products-item">
      <Link to={`/product/${id}`}>
        <p className="products-item__category">{category}</p>
        <img src={image} className="products-item__img" alt="상품 이미지"/>
        <h3 className="products-item__title">{title}</h3>
        <p className="products-item__desc">{description}</p>
        <span className="products-item__price">{price}</span>
        <span className="products-item__rating">{rating.rate}{rating.count}</span>
      </Link>
    </li>
);
export default ProductItems;