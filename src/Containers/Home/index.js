import Slider from 'react-slick';
import { PublicLayout, Categories, ProductCard } from '@components';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
  };
  return (
    <PublicLayout>
      <div className="container">
        <div className="row">
          <div className="col-3 pe-0">
            <Categories show regular />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-12 p-0 top-slider">
                <Slider {...settings}>
                  <ProductCard />
                  <ProductCard />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Home;
