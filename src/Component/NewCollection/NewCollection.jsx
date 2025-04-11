import React from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
import new_collection from '../Assest/new_collections'

const NewCollection = () => {
  return (
    <div className='NewCollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.slice(0, 8).map((item, i) => {
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
};

export default NewCollection;
