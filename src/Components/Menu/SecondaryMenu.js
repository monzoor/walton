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
              <a className="nav-link dropdown-toggle pointer">SHOP</a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
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
              <a className="nav-link dropdown-toggle pointer">PAGES</a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
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
                <i class="fa fa-sync nav-link fs-5 pointer"></i>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-transparent position-relative nav-link"
                >
                  <i class="far fa-heart fs-5"></i>
                  <span className="badge bg-primary position-absolute rounded-circle px-2 py-1">
                    <span className="text-small">4</span>
                  </span>
                </button>
              </li>
              <li className="nav-item">
                <i class="far fa-user nav-link fs-5 pointer"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryMenu;
