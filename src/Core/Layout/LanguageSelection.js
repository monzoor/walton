import { DropDown } from '@components';

import languageSelection from 'data/languageSelection';

const data = {
  name: 'English',
  flag: '🇬🇧',
  lang: 'en',
};

const Content = ({ contentItem }) => {
  return (
    <>
      <span className="me-2">{contentItem.flag}</span>
      <span className="text-muted">{contentItem.name}</span>
    </>
  );
};
const LanguageSelection = () => {
  return (
    <DropDown
      defaultValue={data}
      content={languageSelection}
      mainKey="lang"
      contents={(content) => <Content contentItem={content} />}
      className="ps-0"
    />
  );
};

export default LanguageSelection;
