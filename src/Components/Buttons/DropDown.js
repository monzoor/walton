import { useState, useRef, useCallback } from 'react';

import { useOutsideAlerter } from '@utils/dropDown';

const DropDown = ({ content, defaultValue, mainKey, contents }) => {
  const [toggle, setToggle] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultValue);

  const wrapperRef = useRef(null);

  const buttonToggle = useCallback((value) => {
    setToggle(value);
  }, []);

  useOutsideAlerter(wrapperRef, buttonToggle);

  const toggleItem = (value) => {
    setToggle(false);
    setSelectedItem(() => {
      return content.filter((item) => item[mainKey] === value)[0];
    });
  };

  return (
    <div ref={wrapperRef} className="dropdown">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        {contents(selectedItem)}
      </button>
      <ul className={`dropdown-menu  ${toggle ? 'show' : ''}`}>
        {content.map((item) => {
          return (
            <li onClick={() => toggleItem(item[mainKey])} key={item[mainKey]}>
              <div className="dropdown-item pointer">{contents(item)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
