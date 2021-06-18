import Routes from '../../Routes';

import { TopNav, Header, Footer } from '@components';
import LanguageSelection from './LanguageSelection';
import CurrencySelection from './CurrencySelection';
import Cart from './Cart';
import SearchBar from './SearchBar';

const BaseLayout = () => {
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
      <Header>
        <SearchBar />
        <Cart />
      </Header>
      <Routes />
      <Footer />
    </>
  );
};

export default BaseLayout;
