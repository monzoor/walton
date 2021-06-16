import { Link } from 'react-router-dom';
import { Logo, Icon, Categories } from '@components';
import { useState } from 'react';
import { useOutsideAlerter } from '@utils/dropDown';
import { useRef } from 'react';

const Header = () => {
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
    <div className="container header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-decoration-none">
            <Logo />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">wewxw</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                      <Icon
                        className="ms-2 pt-1 me-5"
                        icon={['fas', 'chevron-down']}
                      />
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
                      <button
                        className="btn btn-primary px-4 py-3"
                        type="submit"
                      >
                        <i
                          class="fa fa-search text-white fs-4"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
            <div className="d-flex">
              <Icon className="ms-2 pt-1" icon={['fas', 'chevron-down']} />
              $000.00
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
