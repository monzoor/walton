import { PublicLayout, Categories } from '@components';

import FeatureBanner from './FeatureBanner';
import FeatureSlider from './FeatureSlider';
import RecentlyViewed from './RecentlyViewed';
import NewArrivals from './NewArrivals';

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
        <div className="row mb-5">
          <div className="col-12">
            <FeatureBanner />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <RecentlyViewed />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <NewArrivals />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Home;
