import { Menu, NewsLetter } from '@components';

const PublicLayout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <NewsLetter />
    </>
  );
};

export default PublicLayout;
