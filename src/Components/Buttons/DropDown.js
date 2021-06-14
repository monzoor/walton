import { useState, useRef, useCallback } from 'react';

import { useOutsideAlerter } from '@utils/dropDown';
import classNames from 'classnames';

const DropDown = ({
  content,
  defaultValue,
  mainKey,
  contents,
  label,
  className,
}) => {
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

  const buttonClasses = classNames('btn btn-light dropdown-toggle', {
    [className]: className,
  });

  return (
    <div ref={wrapperRef} className="dropdown">
      {label ? <span className="text-muted">{label} </span> : ''}
      <button
        className={buttonClasses}
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
