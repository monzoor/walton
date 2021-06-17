import classNames from 'classnames';
import { Link } from 'react-router-dom';

const createHTMLMarkup = (value) => {
  return { __html: value };
};
const ProductCard = ({
  content,
  topSlider = false,
  midBanner = false,
  recently = false,
  list = false,
  className,
}) => {
  const {
    slug,
    category,
    title,
    description,
    price,
    sell_price,
    image,
    links,
    rating,
  } = content;

  const rowClasses = classNames('row', {
    'align-items-end bg-gray-300 border border-start-0': topSlider,
    'p-5 align-items-center': midBanner,
    'border p-3 mx-0 align-items-center ': recently,
    'border border-end-0 mb-3': list,
    [className]: !!className,
  });

  const contentWrapperClasses = classNames('', {
    'col-6 px-5 py-5': topSlider,
    'col-7': midBanner,
    'col-7 order-2': recently,
    'col-12 order-2': list,
  });

  const imageWrapperClasses = classNames('', {
    'col-6 pe-0': topSlider,
    'col-5': midBanner,
    'col-5 order-1': recently,
    'col-12 order-1 pt-2 mb-3': list,
  });

  const wrapperClasses = classNames({ 'mx-4': topSlider });

  const titleClasses = classNames('product-title', {
    'fs-1 text-uppercase text-lh-1': topSlider,
    'fs-3 text-lh-1': midBanner,
    'fs-5 fw-bold mb-0': recently,
    'mb-2': list,
  });

  const descriptionClasses = classNames('text-muted', {
    'text-capitalize': topSlider,
    'd-none': list,
  });

  const priceClasses = classNames('me-2 text-orange', {
    'fs-2': topSlider,
    'fs-5 fw-bold': list,
  });

  const sellPriceClasses = classNames('text-decoration-line-through fw-bold', {
    small: list,
  });

  const buttonClasses = classNames('btn btn-primary  text-white', {
    'mb-5 btn-lg text-uppercase': topSlider,
    'fs-6 mb-3 px-2': list,
  });

  const ratingItems = [];

  if (list) {
    for (let i = 1; i <= 5; i++) {
      if (i > rating) {
        ratingItems.push(<i class="far text-small text-orange fa-star"></i>);
      } else {
        ratingItems.push(<i class="fas text-small text-orange fa-star"></i>);
      }
    }
  }

  return (
    <div className={rowClasses}>
      <div className={contentWrapperClasses}>
        <div className={wrapperClasses}>
          {category && (
            <p className="text-uppercase text-orange text-spacing-5">
              {category}
            </p>
          )}

          <p
            dangerouslySetInnerHTML={createHTMLMarkup(title)}
            className={titleClasses}
          />
          <p className={descriptionClasses}>{description}</p>

          {list ? <span className="d-block mb-2">{ratingItems}</span> : ''}
          {price && (
            <p>
              <span className={priceClasses}>{price}</span>
              {sell_price && (
                <span className={sellPriceClasses}>{sell_price}</span>
              )}
            </p>
          )}

          {!links ? (
            <Link to={`/details/${slug}`} className={buttonClasses}>
              {list ? 'ADD TO CART ' : 'start buying'}
            </Link>
          ) : (
            <>
              {links.map((link) => (
                <p key={link.id} className="mb-2">
                  <Link
                    className="link-dark text-decoration-none"
                    to={`${slug}/${link.slug}`}
                  >
                    {link.name}
                  </Link>
                </p>
              ))}
              <p className="mb-2">
                <Link to="/" className="link-dark text-decoration-none">
                  More...
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
      <div className={imageWrapperClasses}>
        <img className="img-fluid test" src={image} alt={description} />
      </div>
    </div>
  );
};

export default ProductCard;
