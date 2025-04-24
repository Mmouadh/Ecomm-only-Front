import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct';
import { ShopContext } from '../Context/ShopContext'; // use context instead of static import

const Product = () => {
  const { productId } = useParams();
  const { All_Product } = useContext(ShopContext); // get the dynamic data

  const product = All_Product.find((e) => e.id === Number(productId));

  if (!product) return <div>Product not found.</div>; // handle null case

  const relatedProducts = All_Product
    .filter((e) => e.category === product.category && e.id !== product.id)
    .slice(0, 4);

  const remainingSlots = 4 - relatedProducts.length;
  if (remainingSlots > 0) {
    const otherProducts = All_Product
      .filter((e) => e.category !== product.category)
      .slice(0, remainingSlots);
    relatedProducts.push(...otherProducts);
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct relatedProducts={relatedProducts} />
    </div>
  );
};

export default Product;
