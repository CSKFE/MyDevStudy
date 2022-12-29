import { Product } from "../../type";

const ProductDetail = ({
  item: {
    category, 
    image, 
    title, 
    description, 
    price, 
    rating: {rate}
  }
}:{item: Product}) => (
    <div className="products-detail">
      <h3>상품상세</h3>
      <p className="products-detail__category">{category}</p>
      <img src={image} className="products-detail__img" alt="상품 이미지"/>
      <h3 className="products-detail__title">{title}</h3>
      <p className="products-detail__desc">{description}</p>
      <span className="products-detail__price">{price}</span>
      <span className="products-detail__rating">{rate}</span>
  </div>
);

export default ProductDetail;