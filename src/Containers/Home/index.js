import { PublicLayout, Categories } from '@components';
import FeatureBanner from './FeatureBanner';

import FeatureSlider from './FeatureSlider';

const Home = () => {
  return (
    <PublicLayout>
      <div className="container">
        <div className="row mb-5">
          <div className="col-3 pe-0">
            <Categories show regular />
          </div>
          <div className="col-9">
            <div className="row">
              <FeatureSlider />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <FeatureBanner />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Home;
