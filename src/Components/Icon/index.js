import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

library.add(fab, fas);

const Icon = ({ icon, className }) => {
  const style = classNames({ [className]: !!className });
  return <FontAwesomeIcon className={style} icon={icon} />;
};

export default Icon;
