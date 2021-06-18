import productList from 'data/productList4.json';
import { SliderItems } from '@components';

const LatestProduct = () => {
  return (
    <div className="row mb-5">
      <div className="col-12 ps-0">
        <p className="fw-bold fs-4">Latest Products</p>
      </div>
      <div className="col-12 border">
        <div className="row">
          <SliderItems
            rowClassNames="px-0"
            productWrapperClasses="px-0 col-12"
            content={productList}
            viewType={{ short: true }}
            arrowClasses="short"
            showRating
            noDescription
            noButton
            noSellPrice
            titleLink
          />
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
