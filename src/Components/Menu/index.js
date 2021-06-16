import { Link } from 'react-router-dom';

import { PATHS } from '@constants';
import { Icon } from '@components';

const Menu = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-4 bg-primar">
          <div className="row justify-content-end">
            <div className="col-auto py-2 pe-5">
              <Icon className="me-4" icon={['fas', 'bars']} />
              Browse categories
            </div>
          </div>
        </div>
        <div className="col-8 bg-dark">oka</div>
      </div>
      {/* <Icon icon={faCoffee} />
      <ul>
        <li>
          <Link to={PATHS.HOME}>Home</Link>
        </li>
        <li>
          <Link to={PATHS.PAGE1}>Page 1</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Menu;
