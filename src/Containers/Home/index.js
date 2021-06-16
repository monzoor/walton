import { PublicLayout, Categories } from '@components';

const Home = () => {
  return (
    <PublicLayout>
      <div className="container">
        <div className="row">
          <div className="col-3 pe-0">
            <Categories show regular />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Home;
