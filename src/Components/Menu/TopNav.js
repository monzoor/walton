const TopNav = ({ children }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container justify-content-start">
        {children}
        {/* asdfsdf */}
        {/* <a className="navbar-brand" href="#">
          <img
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
          />
        </a> */}
      </div>
    </nav>
  );
};

export default TopNav;
