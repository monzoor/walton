import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className="row align-items-end bg-gray-300 border border-start-0">
      <div className="col-6 px-5 py-5">
        <div className="mx-4">
          <p className="text-uppercase text-orange text-spacing-5">clothing</p>
          <p className="fs-1 text-uppercase text-lh-1">
            up to 20% off speakers
          </p>
          <p className="text-muted text-capitalize">
            The best gadgets collection 2021
          </p>
          <p>
            <span className="text-decoration-line-through fw-bold">
              $439.00
            </span>
            <span className="text-orange fs-2 ms-3">$350.00</span>
          </p>
          <Link
            to="/"
            className="btn btn-primary btn-lg text-uppercase text-white mb-5"
          >
            start buying
          </Link>
        </div>
      </div>
      <div className="col-6 pe-0">
        <img
          className="img-fluid"
          src="./assets/images/products/slider/1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductCard;
