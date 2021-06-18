import { ProductCard } from '@components';

import productList from 'data/productList8.json';

export const ProductLists = () => {
  return (
    <>
      {productList.map((product) => (
        <div key={product.id} className="col-3">
          <ProductCard content={product} showRating list />
        </div>
      ))}
    </>
  );
};

export default ProductLists;
