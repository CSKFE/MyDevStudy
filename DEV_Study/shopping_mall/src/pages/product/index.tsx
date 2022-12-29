import { useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from '../../queryClient';
import ProductItems from '../../components/product/item';
import '../../scss/index.css';
import GET_PRODUCTS, { Product } from "../../graphql/products";

const ProductList = () => {
  const { data } = useQuery<Product>(QueryKeys.PRODUCTS, () => graphqlFetcher(GET_PRODUCTS));
    
  return (
    <>
      <h1>상품목록</h1>
      <ul className="products">
        {data?.products?.map(product => (
          <ProductItems {...product} key={product.id}></ProductItems>
          ))}
      </ul>
    </>
  );
};

export default ProductList;