import { Link } from 'react-router-dom';

const CartButton = ({ noButton, slug, buttonClasses, cart = false }) => {
  if (noButton) return <></>;
  return (
    <div className="d-flex">
      <Link to={`/details/${slug}`} className={buttonClasses}>
        {cart ? 'ADD TO CART ' : 'START BUYING'}
      </Link>
      {cart ? (
        <div className="button-box">
          <button className="btn btn-outline-light ms-2 px-2 text-muted border">
            <i className="fas fa-compress-alt" />
          </button>
          <button className="btn btn-outline-light ms-2 px-2 text-muted border">
            <i className="fas fa-heart" />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CartButton;
