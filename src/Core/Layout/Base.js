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
        <div className="ps-5 text-muted border-start border-2">
          <span>Call us toll free: </span>
          <span className="fw-bold">+1888 234 5678 </span>
        </div>
      </TopNav>
      <Routes />
    </>
  );
};

export default BaseLayout;
