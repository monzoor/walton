import { SecondaryMenu } from '@components';

const Menu = () => {
  return (
    <div className="container-fluid bg-primary-dark">
      <div className="container">
        <div className="row">
          <div className="col-3 bg-primary text-white py-2">
            <div className="row mt-2 pt-1">
              <div className="col-auto py-2 pe-5">
                <i className="fas fa-bars"></i>
                Browse categories
              </div>
            </div>
          </div>
          <div className="col bg-dark py-2">
            <SecondaryMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
