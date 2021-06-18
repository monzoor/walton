import { ProductCard } from '@components';

import banner from 'data/bannerData.json';

const Banner = () => {
  return <ProductCard longBanner noButton content={banner[0]} />;
};

export default Banner;
