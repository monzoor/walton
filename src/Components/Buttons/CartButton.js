import { Link } from 'react-router-dom';

const CartButton = ({ slug, buttonClasses, cart = false }) => {
  return (
    <div className="d-flex">
      <Link to={`/details/${slug}`} className={buttonClasses}>
        {cart ? 'ADD TO CART ' : 'start buying'}
      </Link>
      {cart ? (
        <div className="button-box">
          <button className="btn btn-outline-light ms-2 px-2 text-muted border">
            <i class="fas fa-compress-alt" />
          </button>
          <button className="btn btn-outline-light ms-2 px-2 text-muted border">
            <i class="fas fa-heart" />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CartButton;
