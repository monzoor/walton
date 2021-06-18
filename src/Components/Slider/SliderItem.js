import Slider from 'react-slick';

import { ProductCard } from '@components';
import classNames from 'classnames';

const SliderItems = ({
  content,
  viewType,
  rowClassNames = '',
  productWrapperClasses = '',
  arrowClasses = '',
  showRating = false,
  noDescription = false,
  noButton = false,
  noSellPrice = false,
  titleLink = false,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow arrowClasses={arrowClasses} />,
    prevArrow: <PrevArrow arrowClasses={arrowClasses} />,
  };

  return (
    <div className={`product-slider ${rowClassNames}`}>
      <Slider {...settings}>
        <div>
          <div className="row mx-0">
            {content.map((item) => (
              <div
                key={item.id}
                className={classNames('col-4', productWrapperClasses)}
              >
                <ProductCard
                  {...viewType}
                  slider
                  showRating={showRating}
                  content={item}
                  noDescription={noDescription}
                  noButton={noButton}
                  noSellPrice={noSellPrice}
                  titleLink={titleLink}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="row mx-0">
            {content.map((item) => (
              <div
                key={item.id}
                className={classNames('col-4', productWrapperClasses)}
              >
                <ProductCard
                  {...viewType}
                  slider
                  showRating={showRating}
                  content={item}
                  noDescription={noDescription}
                  noButton={noButton}
                  noSellPrice={noSellPrice}
                  titleLink={titleLink}
                />
              </div>
            ))}
          </div>
        </div>
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick, arrowClasses } = props;

  return (
    <div
      className={`${className} ${arrowClasses} btn btn-light p-3 d-flex justify-content-center`}
      onClick={onClick}
    >
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick, arrowClasses } = props;
  return (
    <div
      className={`${className} ${arrowClasses} btn btn-light p-3 d-flex justify-content-center`}
      onClick={onClick}
    >
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};

export default SliderItems;
