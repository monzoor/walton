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
  } = content;

  const rowClasses = classNames('row', {
    'align-items-end bg-gray-300 border border-start-0': topSlider,
    'p-5 align-items-center': midBanner,
    'border p-3 mx-0 align-items-center ': recently,
    [className]: !!className,
  });

  const contentWrapperClasses = classNames('', {
    'col-6 px-5 py-5': topSlider,
    'col-7': midBanner,
    'col-7 order-2': recently,
  });

  const imageWrapperClasses = classNames('', {
    'col-6 pe-0': topSlider,
    'col-5': midBanner,
    'col-5 order-1': recently,
  });

  const wrapperClasses = classNames({ 'mx-4': topSlider });

  const titleClasses = classNames('product-title', {
    'fs-1 text-uppercase text-lh-1': topSlider,
    'fs-3 text-lh-1': midBanner,
    'fs-5 fw-bold': recently,
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

          {!links ? (
            <Link to={`/details/${slug}`} className={buttonClasses}>
              start buying
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
        <img className="img-fluid" src={image} alt={description} />
      </div>
    </div>
  );
};

export default ProductCard;
