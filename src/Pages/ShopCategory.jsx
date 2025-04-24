import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown from '../Component/Assest/dropdown_icon.png';
import Item from '../Component/Item/Item';

const ShopCategory = (props) => {
  const { All_Product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of {All_Product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {All_Product.length > 0 ? (
          All_Product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={item.id}  // Ensure each item has a unique key
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
            return null;
          })
        ) : (
          <p>Loading products...</p>  // Show loading if data is not available
        )}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
