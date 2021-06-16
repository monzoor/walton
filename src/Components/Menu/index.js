// import { Link } from 'react-router-dom';

// import { PATHS } from '@constants';
import { Icon } from '@components';

const Menu = () => {
  return (
    <div className="container-fluid bg-primary-dark">
      <div className="container">
        <div className="row">
          <div className="col-3 bg-primary text-white py-3">
            <div className="row">
              <div className="col-auto py-2 pe-5">
                <Icon className="me-4" icon={['fas', 'bars']} />
                Browse categories
              </div>
            </div>
          </div>
          <div className="col bg-dark py-3">oka</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
