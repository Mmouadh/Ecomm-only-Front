import React from 'react';
import './RelatedProduct.css';
import Item from '../Item/Item';

const RelatedProduct = ({ relatedProducts }) => {
  return (
    <div className='relatedproduct'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-items">
        {relatedProducts.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProduct;
