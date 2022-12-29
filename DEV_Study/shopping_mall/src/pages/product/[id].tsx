import { useQuery } from 'react-query';
import { graphqlFetcher, QueryKeys } from '../../queryClient';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/product/detail';
import { Product, GET_PRODUCT }  from '../../graphql/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id],() => graphqlFetcher(GET_PRODUCT, { id }));

  if(!data) return null;

  return (
    <ProductDetail item={data}/>
  )
};

export default ProductDetailPage;