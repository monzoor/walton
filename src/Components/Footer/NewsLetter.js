const NewsLetter = () => {
  return (
    <div className="row bg-primary py-5 mb-5">
      <div className="col-12">
        <div className="container">
          <div className="row">
            <div className="col-6 text-white fs-1">
              <span className="me-3">
                <i className="fas fa-paper-plane"></i>
              </span>
              <span>Sign Up for NewsLetter</span>
            </div>
            <div className="col-6">
              <form className="d-flex">
                <input
                  className="form-control bg-white border-0"
                  type="search"
                  placeholder="Enter your email address"
                  aria-label="Search"
                  required
                />
                <button className="btn btn-dark px-5 py-3" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
