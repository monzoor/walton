import Routes from '../../Routes';

import { TopNav } from '@components';
import LanguageSelection from './LanguageSelection';

const BaseLayout = ({ children }) => {
  return (
    <>
      <TopNav>
        <LanguageSelection />
      </TopNav>
      <Routes />
    </>
  );
};

export default BaseLayout;
