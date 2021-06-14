const TopNav = ({ children }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container py-2">{children}</div>
    </nav>
  );
};

export default TopNav;
