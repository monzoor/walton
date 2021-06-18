import { SectionHeader, SpecialOffer, SliderItems } from '@components';
import specialOffer from 'data/specialOffer.json';
import productList from 'data/productList.json';

const NewArrivals = () => {
  return (
    <>
      <SectionHeader title="NEW ARRIVALS" icon="fas fa-trophy me-2" />
      <div className="row mx-0 border-end">
        <div
          className="col-5 border border-end-0 p-2"
          style={{ height: '847px' }}
        >
          <SpecialOffer content={specialOffer} />
        </div>
        <div className="col-7">
          <div className="row">
            <SliderItems
              rowClassNames="px-0"
              productWrapperClasses="px-0"
              content={productList}
              viewType={{ list: true }}
              arrowClasses="list"
              showRating
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
