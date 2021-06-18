import { SectionHeader, SliderItems } from '@components';

import recentlyViewed from 'data/recentlyViewed.json';

const RecentlyViewed = () => {
  return (
    <>
      <SectionHeader
        title="RECENTLY VIEWED PRODUCTS"
        icon="fas fa-trophy me-2"
        border="border-bottom"
      />
      <SliderItems
        rowClassNames="mt-5"
        productWrapperClasses="mb-4"
        content={recentlyViewed}
        viewType={{ recently: true }}
      />
    </>
  );
};

export default RecentlyViewed;
