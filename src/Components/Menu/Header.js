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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {children}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
