import { Product } from "../../graphql/products";

const ProductDetail = ({
  item: {
    imageUrl, 
    title, 
    description, 
    price, 
  }
}:{item: Product}) => (
    <div className="products-detail">
      <h3>상품상세</h3>
      <img src={imageUrl} className="products-detail__img" alt="상품 이미지"/>
      <h3 className="products-detail__title">{title}</h3>
      <p className="products-detail__desc">{description}</p>
      <span className="products-detail__price">{price}</span>
  </div>
);

export default ProductDetail;