import { gql } from "graphql-tag";

export type Product = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  description: string;
  createAt: string;
}

export type Products = {
  products: Product[];
}

export const GET_PRODUCT = gql`
  query GET_PRODUCT($id:string) {
    id
    imageUrl
    title
    price
    description
    createAt
  }
`

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    id
    imageUrl
    title
    price
    description
    createAt
  }
`

export default GET_PRODUCTS; 