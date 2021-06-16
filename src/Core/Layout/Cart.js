const Cart = () => {
  return (
    <div className="d-flex">
      <button
        type="button"
        className="btn btn-transparent position-relative d-flex align-items-center"
      >
        <i className="fa fa-shopping-cart me-3 fs-1" />
        <span className="badge bg-primary position-absolute rounded-circle">
          4
        </span>
        <span className="fw-bolder">$000.00</span>
      </button>
    </div>
  );
};

export default Cart;
