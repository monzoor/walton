import { Link } from 'react-router-dom';
import { Logo } from '@components';

const Header = ({ children }) => {
  return (
    <div className="container header">
      <nav className="navbar navbar-expand-lg navbar-dark py-3">
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {children}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
