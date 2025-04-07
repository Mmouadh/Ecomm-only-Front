import React from "react";
import "./Popular.css";
import data_product from "../Assest/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular In Women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map(Item, (i) => {
          return (
            <Item
              key={i}
              id={Item.id}
              name={Item.name}
              image={Item.image}
              new_price={Item.new_price}
              old_price={Item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
