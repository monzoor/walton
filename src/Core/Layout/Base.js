import Routes from '../../Routes';

import { TopNav } from '@components';
import LanguageSelection from './LanguageSelection';
import CurrencySelection from './CurrencySelection';

const BaseLayout = ({ children }) => {
  return (
    <>
      <TopNav>
        <ul className="nav">
          <li className="nav-item pe-5 border-end border-2">
            <LanguageSelection />
          </li>
          <li className="nav-item ps-5">
            <CurrencySelection />
          </li>
        </ul>
      </TopNav>
      <Routes />
    </>
  );
};

export default BaseLayout;
