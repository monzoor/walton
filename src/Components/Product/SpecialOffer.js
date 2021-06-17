import { CountdownTimer } from '@components';

const SpecialOffer = ({ content }) => {
  const { image, sellPercent, title, price, sell_price, soldItemCount, stock } =
    content;
  return (
    <div className="bg-gray-custom-product p-4">
      <div className="row justify-content-between">
        <div className="col-auto">
          <p className="lead text-muted">
            Special <br />
            offer
          </p>
        </div>
        <div className="col-auto">
          <p className="bg-primary rounded-circle py-3 px-4 text-center mb-0">
            <span className="small">Save</span>
            <br />
            <span className="fw-bold">{sellPercent}%</span>
          </p>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-9">
          <img src={image} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row justify-content-center text-center mb-3">
        <div className="col">
          <p className="fs-1 fw-bold">{title}</p>
          <p className="lead">
            <span className="text-orange me-3 fw-bold">{price}</span>
            <span className="text-muted small text-decoration-line-through">
              {sell_price}
            </span>
          </p>
        </div>
      </div>
      <div className="row justify-content-between mb-2">
        <div className="col text-muted">
          <span className="small me-1">Already Sold: </span>
          <span className="fw-bold">{soldItemCount}</span>
        </div>
        <div className="col text-muted text-end">
          <span className="small me-1">Available: </span>
          <span className=" fw-bold">{stock}</span>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <div className="progress">
            <div
              className="progress-bar bg-primary"
              style={{ width: `${(soldItemCount / stock) * 100}%` }}
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-auto">
          <p className="text-muted ">Hurry Up ! Offer ends in</p>
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
