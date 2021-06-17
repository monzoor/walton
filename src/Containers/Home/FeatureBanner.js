import { ProductCard } from '@components';

import featureMidBanner from 'data/featureMidBanner.json';

const FeatureBanner = () => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="bg-gray-custom-1">
          <ProductCard
            className="mid-product"
            content={featureMidBanner[0]}
            midBanner
          />
        </div>
      </div>
      <div className="col-6">
        <div className="bg-gray-custom-2">
          <ProductCard
            className="mid-product"
            content={featureMidBanner[1]}
            midBanner
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
