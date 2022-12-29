import { useQuery } from "react-query";
import { fetcher, QueryKeys } from '../../queryClient';
import { Product } from "../../type";
import ProductItems from '../../components/product/item';
import '../../scss/index.css';

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () => 
    fetcher({
      method: 'GET',
      path: '/products'
    }));
    
  return (
    <>
      <h1>상품목록</h1>
      <ul className="products">
        {data?.map(product => (
          <ProductItems {...product} key={product.id}></ProductItems>
          ))}
      </ul>
    </>
  );
};

export default ProductList;