import { Link } from 'react-router-dom';
import { PATHS } from '@constants';

import { Icon } from '@components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <>
      <Icon icon={faCoffee} />
      <ul>
        <li>
          <Link to={PATHS.HOME}>Home</Link>
        </li>
        <li>
          <Link to={PATHS.PAGE1}>Page 1</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
