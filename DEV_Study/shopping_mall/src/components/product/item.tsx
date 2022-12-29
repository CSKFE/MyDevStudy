import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
const ProductItems = (
{
  id,
  imageUrl,
  title,
  price,
  description,
  createAt,
}
: Product) => (
    <li className="products-item">
      <Link to={`/product/${id}`}>
        <img src={imageUrl} className="products-item__img" alt="상품 이미지"/>
        <h3 className="products-item__title">{title}</h3>
        <p className="products-item__desc">{description}</p>
        <span className="products-item__price">{price}</span>
        <span className="products-item__rating">{createAt}</span>
      </Link>
    </li>
);
export default ProductItems;