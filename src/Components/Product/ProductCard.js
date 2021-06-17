import classNames from 'classnames';
import { Link } from 'react-router-dom';

const createHTMLMarkup = (value) => {
  return { __html: value };
};
const ProductCard = ({
  content,
  topSlider = false,
  midBanner = false,
  className,
}) => {
  const { slug, category, title, description, price, sell_price, image } =
    content;

  const rowClasses = classNames('row', {
    'align-items-end bg-gray-300 border border-start-0': topSlider,
    'p-5 align-items-center': midBanner,
    [className]: !!className,
  });

  const contentWrapperClasses = classNames('', {
    'col-6 px-5 py-5': topSlider,
    'col-7': midBanner,
  });

  const imageWrapperClasses = classNames('', {
    'col-6 pe-0': topSlider,
    'col-5': midBanner,
  });

  const wrapperClasses = classNames({ 'mx-4': topSlider });

  const titleClasses = classNames('product-title', {
    'fs-1 text-uppercase text-lh-1': topSlider,
    'fs-3 text-lh-1': midBanner,
  });

  const descriptionClasses = classNames('text-muted', {
    'text-capitalize': topSlider,
  });

  const buttonClasses = classNames(
    'btn btn-primary text-uppercase text-white',
    {
      'mb-5 btn-lg': topSlider,
    },
  );

  return (
    <div className={rowClasses}>
      <div className={contentWrapperClasses}>
        <div className={wrapperClasses}>
          {category ? (
            <p className="text-uppercase text-orange text-spacing-5">
              {category}
            </p>
          ) : (
            ''
          )}

          <p
            dangerouslySetInnerHTML={createHTMLMarkup(title)}
            className={titleClasses}
          />
          <p className={descriptionClasses}>{description}</p>

          {price ? (
            <p>
              {sell_price ? (
                <span className="text-decoration-line-through fw-bold">
                  {sell_price}
                </span>
              ) : (
                ''
              )}

              <span className="text-orange fs-2 ms-3">{price}</span>
            </p>
          ) : (
            ''
          )}

          <Link to={`/details/${slug}`} className={buttonClasses}>
            start buying
          </Link>
        </div>
      </div>
      <div className={imageWrapperClasses}>
        <img className="img-fluid" src={image} alt={description} />
      </div>
    </div>
  );
};

export default ProductCard;
