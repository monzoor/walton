import Slider from 'react-slick';

import { ProductCard, SectionHeader } from '@components';

import recentlyViewed from 'data/recentlyViewed.json';

const SliderItems = () => {
  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} btn btn-light p-3 d-flex justify-content-center`}
        onClick={onClick}
      >
        <i className="fa fa-chevron-right"></i>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} btn btn-light p-3 d-flex justify-content-center`}
        onClick={onClick}
      >
        <i className="fa fa-chevron-left"></i>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="product-slider mt-5">
      <Slider {...settings}>
        <div>
          <div className="row abc">
            {recentlyViewed.map((item) => (
              <div key={item.id} className="col-4 mb-4">
                <ProductCard recently content={item} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="row abc">
            {recentlyViewed.map((item) => (
              <div key={item.id} className="col-4 mb-4">
                <ProductCard recently content={item} />
              </div>
            ))}
          </div>
        </div>
      </Slider>
    </div>
  );
};
const RecentlyViewed = () => {
  return (
    <>
      <SectionHeader
        title="RECENTLY VIEWED PRODUCTS"
        icon="fas fa-trophy me-2"
        border="border-bottom"
      />
      <SliderItems />
    </>
  );
};

export default RecentlyViewed;
