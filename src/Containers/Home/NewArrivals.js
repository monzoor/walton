import { ProductCard, SectionHeader, SpecialOffer } from '@components';
import specialOffer from 'data/specialOffer.json';

const NewArrivals = () => {
  return (
    <>
      <SectionHeader title="NEW ARRIVALS" icon="fas fa-trophy me-2" />
      <div className="row mx-0">
        <div className="col-5 border border-end-0 p-2">
          <SpecialOffer content={specialOffer} />
        </div>
        <div className="col-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est esse
          recusandae aspernatur et, at ducimus? Nihil dolor ullam illum
          perferendis, nesciunt eum pariatur repellat temporibus totam.
          Voluptatibus quod aut eaque.
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
