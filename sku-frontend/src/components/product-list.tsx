
// @ts-nocheck
import React from 'react';

import { Product } from './product';
import { Container } from 'react-bootstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { useSelector } from 'react-redux';
import { selectFilter } from '../app/filterSlice';

const GET_PRODUCTS = gql`
  {
    products {
      id
      title
      vendor
      created_at
      body_html
      image_src
      stock
      price
    }
  }
`;
const GET_PRODUCTS_LIKE = gql`
  query productsLike ($filter: String!) {
    productsLike (filter: $filter) {
      id
      title
      vendor
      created_at
      body_html
      image_src
      stock
      price
    }
  }
`;

export function ProductList() {
  const filter = useSelector(selectFilter);
  console.log(filter)
  let variables = { 'filter': filter }
  return (
    <Container className="ProductContainer">
      
      
       { filter === '' ? 
       <Query query={GET_PRODUCTS} >
        {({ data, loading }) => {
          if (loading || !data) {
            return <div>Loading ...</div>;
          }
          console.log(data)
          const listProducts = data.products.map((p) => <Product key={p.id} product={p} />);
          return listProducts;
        }}
      </Query> : <Query query={GET_PRODUCTS_LIKE} variables={variables} > 
      {({ data, loading }) => {
          console.log(data)
          if (loading || !data) {
            return <div>Loading ...</div>;
          }
          const listProducts = data.productsLike.map((p) => <Product key={p.id} product={p} />);
          return listProducts;
        }}
      </Query> }
    </Container>
  );
}
