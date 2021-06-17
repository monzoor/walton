import Slider from 'react-slick';
import { ProductCard } from '@components';

import featureData from 'data/featureSlider.json';

const FeatureSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
  };
  return (
    <div className="col-12 p-0 top-slider">
      <Slider {...settings}>
        {featureData.map((item, index) => (
          <ProductCard key={item.id} content={item} topSlider />
        ))}
      </Slider>
    </div>
  );
};

export default FeatureSlider;
