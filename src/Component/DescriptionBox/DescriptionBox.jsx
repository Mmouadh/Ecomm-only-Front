import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
      <div className="descriptionbox-nav-box">Description</div>
      <div className="descriptionbox-nav-box fade">Reviews (321)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          delectus fuga, in odio natus cupiditate laboriosam autem maiores nulla
          beatae laborum minima quibusdam voluptatibus, repellat reprehenderit
          numquam corrupti incidunt. Necessitatibus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          animi maxime odio natus at, nostrum asperiores sint hic voluptatibus
          voluptatum cupiditate laudantium, rerum tenetur doloremque ut corporis
          dolore ipsa? Nisi.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
