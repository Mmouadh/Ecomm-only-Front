import React, { useState,useEffect } from "react";
import "./Popular.css";
import Item from "../Item/Item";

const Popular = () => {

   const [popular,setPopular] = useState ([]);
  
        useEffect (()=>{
                fetch('http://localhost:4000/popular')
                .then((response)=>response.json())
                .then((data)=>setPopular(data))
        },[])
  
  return (
    <div className="popular">
      <h1>Popular In Women</h1>
      <hr />
      <div className="popular-item">
        {popular
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
