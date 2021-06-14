import { DropDown } from '@components';
import currencySelection from 'data/currencySelection.json';

const data = {
  name: 'USD',
  sign: '$',
};

const Content = ({ contentItem }) => {
  return (
    <>
      <span className="text-muted">{contentItem.name}</span>
    </>
  );
};

const CurrencySelection = () => {
  return (
    <div className="d-flex align-items-center">
      <DropDown
        defaultValue={data}
        content={currencySelection}
        mainKey="name"
        contents={(content) => <Content contentItem={content} />}
        label="Currency:"
        className="ps-1"
      />
    </div>
  );
};

export default CurrencySelection;
