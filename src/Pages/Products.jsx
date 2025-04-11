import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct';
import all_product from '../Component/Assest/all_product'; // Import all_product from Assest folder

const Product = () => {
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  // Filter related products from the same category and exclude the current product
  const relatedProducts = all_product
    .filter((e) => e.category === product.category && e.id !== product.id) // Same category, different product
    .slice(0, 4); // Limit to 4 related products

  // If there are fewer than 4 related products, fill the remaining slots with random products
  const remainingSlots = 4 - relatedProducts.length;
  if (remainingSlots > 0) {
    const otherProducts = all_product
      .filter((e) => e.category !== product.category) // Exclude the current category
      .slice(0, remainingSlots); // Get the remaining slots
    relatedProducts.push(...otherProducts); // Add random products to fill the remaining slots
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      {/* Pass filtered related products to RelatedProduct */}
      <RelatedProduct relatedProducts={relatedProducts} />
    </div>
  );
}

export default Product;
