import { Categories } from '@components';
import { useState } from 'react';
import { useOutsideAlerter } from '@utils/dropDown';
import { useRef } from 'react';

const SearchBar = () => {
  const categoriesRef = useRef(null);
  const [viewCategories, setViewCategories] = useState(false);
  const toggleCategories = () => {
    setViewCategories((viewCategories) => !viewCategories);
  };
  const closeCategory = () => {
    setViewCategories(false);
  };

  useOutsideAlerter(categoriesRef, closeCategory);

  return (
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <div className="row bg-light">
          <div className="col-auto position-relative">
            <div
              ref={categoriesRef}
              onClick={toggleCategories}
              className="pointer mt-3 ms-4 pt-1"
            >
              <span className="fw-bold">All Categories</span>
              <i className="fas fa-chevron-down ms-2 pt-1 me-5 fs-6"></i>
            </div>
            <Categories show={viewCategories} />
          </div>
          <div className="col pe-0">
            <form className="d-flex">
              <input
                className="form-control bg-transparent border-0 border-start ps-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary px-4 py-3" type="submit">
                <i className="fa fa-search text-white fs-4" />
              </button>
            </form>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SearchBar;
