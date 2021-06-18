import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { CartButton } from '@components';

const createHTMLMarkup = (value) => {
  return { __html: value };
};
const ProductCard = ({
  content,
  topSlider = false,
  midBanner = false,
  recently = false,
  list = false,
  slider = false,
  longBanner = false,
  className,
  noButton = false,
  noDescription = false,
  short = false,
  noSellPrice = false,
  showRating = false,
  titleLink = false,
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
    onSale,
    newProduct,
    offerTag,
  } = content;

  const rowClasses = classNames('row', {
    'align-items-end bg-gray-300 border border-start-0': topSlider,
    'p-5 align-items-center': midBanner,
    'border p-3 mx-0 align-items-center ': recently,
    'border border-end-0 mb-3 position-relative hover': list,
    'mx-0': slider,
    'p-2 border-bottom align-items-center py-4': short,
    [className]: !!className,
  });

  const contentWrapperClasses = classNames('', {
    'col-6 px-5 py-5': topSlider,
    'col-7': midBanner,
    'col-7 order-2': recently,
    'col-12 order-2': list,
    'col-6 pt-5 px-5': longBanner,
    'col-8 order-2': short,
  });

  const imageWrapperClasses = classNames('', {
    'col-6 pe-0': topSlider,
    'col-5': midBanner,
    'col-5 order-1': recently,
    'col-12 order-1 pt-2 mb-3': list,
    'col-6 pe-0 tt': longBanner,
    'col-4 px-0 order-1': short,
  });

  const wrapperClasses = classNames({ 'mx-4': topSlider, 'mb-2': list });

  const titleClasses = classNames('product-title', {
    'fs-1 text-uppercase text-lh-1': topSlider,
    'fs-3 text-lh-1': midBanner,
    'fs-5 fw-bold mb-0': recently,
    'mb-0': list,
    'fs-3': longBanner,
    'text-decoration-none mb-2 d-block': short,
  });

  const descriptionClasses = classNames('text-muted', {
    'text-capitalize': topSlider,
    'd-none': list,
  });

  const priceClasses = classNames('me-2 text-orange', {
    'fs-2': topSlider,
    'fs-5 fw-bold': list,
    'mt-2 d-block': short,
  });

  const sellPriceClasses = classNames('text-decoration-line-through fw-bold', {
    small: list,
  });

  const buttonClasses = classNames('btn btn-primary  text-white', {
    'mb-5 btn-lg text-uppercase': topSlider,
    'fs-6 mb-4 px-2': list,
  });

  const sellRibbon = classNames('note', { sale: onSale, new: newProduct });

  const ratingItems = [];

  if (showRating) {
    for (let i = 1; i <= 5; i++) {
      if (i > rating) {
        ratingItems.push(
          <i key={i} className="far text-small text-orange fa-star"></i>,
        );
      } else {
        ratingItems.push(
          <i key={i} className="fas text-small text-orange fa-star"></i>,
        );
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
          {offerTag && (
            <p
              dangerouslySetInnerHTML={createHTMLMarkup(offerTag)}
              className="text-muted"
            />
          )}

          {!titleLink ? (
            <p
              dangerouslySetInnerHTML={createHTMLMarkup(title)}
              className={titleClasses}
            />
          ) : (
            <Link className={titleClasses} to={`/details/${slug}`}>
              <span dangerouslySetInnerHTML={createHTMLMarkup(title)} />
            </Link>
          )}

          {!noDescription && (
            <p
              dangerouslySetInnerHTML={createHTMLMarkup(description)}
              className={descriptionClasses}
            />
          )}

          {showRating && <span className="d-block mb-0">{ratingItems}</span>}

          {price && (
            <p>
              <span className={priceClasses}>{price}</span>
              {sell_price && !noSellPrice && (
                <span className={sellPriceClasses}>{sell_price}</span>
              )}
            </p>
          )}

          {!links ? (
            <CartButton
              slug={`/details/${slug}`}
              buttonClasses={buttonClasses}
              noButton={noButton}
              cart={list}
            />
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
        {onSale || newProduct ? <div className={sellRibbon} /> : ''}
        {list ? (
          <Link to={`/details/${slug}`}>
            <img className="img-fluid test" src={image} alt={description} />
          </Link>
        ) : (
          <img className="img-fluid test" src={image} alt={description} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
