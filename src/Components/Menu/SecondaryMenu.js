import { NavLink } from 'react-router-dom';
import { PATHS } from '@constants';

const SecondaryMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link "
                to={PATHS.HOME}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle pointer">SHOP</span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    activeClassName="active"
                    className="dropdown-item"
                    to={PATHS.HOME}
                  >
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    className="dropdown-item"
                    to={PATHS.HOME}
                  >
                    Another action
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    className="dropdown-item"
                    to={PATHS.HOME}
                  >
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link "
                to={PATHS.BLOG}
              >
                BLOG
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle pointer">PAGES</span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    activeClassName="active"
                    className="dropdown-item"
                    to={PATHS.HOME}
                  >
                    Action
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link "
                to={PATHS.CONTACT_US}
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
          <div className="d-flex text-white">
            <ul className="navbar-nav">
              <li className="nav-item">
                <i className="fa fa-map-marker-alt nav-link fs-5 pointer"></i>
              </li>
              <li className="nav-item">
                <i className="fa fa-sync nav-link fs-5 pointer"></i>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-transparent position-relative nav-link"
                >
                  <i className="far fa-heart fs-5"></i>
                  <span className="badge bg-primary position-absolute rounded-circle px-2 py-1">
                    <span className="text-small">4</span>
                  </span>
                </button>
              </li>
              <li className="nav-item">
                <i className="far fa-user nav-link fs-5 pointer"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryMenu;
