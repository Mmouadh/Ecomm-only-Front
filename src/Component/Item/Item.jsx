import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="item">
      <Link to={`/product/${props.id}`} onClick={handleClick}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price} TND</div>
        <div className="item-price-old">{props.old_price} TND</div>
      </div>
    </div>
  );
};

export default Item;

