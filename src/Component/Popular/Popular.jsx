import React from "react";
import "./Popular.css";
import all_product from "../Assest/all_product";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular In Women</h1>
      <hr />
      <div className="popular-item">
        {all_product
          .filter((item) => item.category === "women")
          .slice(0, 4)
          .map((item, i) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
    </div>
  );
};

export default Popular;
