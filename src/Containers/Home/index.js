import { PublicLayout, Categories } from '@components';

import FeatureBanner from './FeatureBanner';
import FeatureSlider from './FeatureSlider';
import RecentlyViewed from './RecentlyViewed';
import NewArrivals from './NewArrivals';
import Banner from './Banner';
import ProductLists from './ProductLists';
import LatestProduct from './LatestProduct';

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
        <div className="row mb-5">
          <div className="col-3">
            <div className="row mx-0">
              <LatestProduct />
            </div>
            <div className="row mx-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus commodi cupiditate nobis nostrum nam, error
              molestias magnam aspernatur animi deleniti omnis ea voluptas iste
              sequi fuga delectus veniam excepturi sed.
            </div>
          </div>
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12 bg-gray-custom-1">
                <Banner />
              </div>
            </div>
            <div className="row border-end">
              <ProductLists />
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Home;
