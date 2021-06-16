import { Link } from 'react-router-dom';
import categories from 'data/categories.json';
import classNames from 'classnames';

const Categories = ({ show, regular }) => {
  const categoriesCreator = (items) => {
    return (
      <ul>
        {items.map((item) => {
          if (item.sabCategory.length) {
            return (
              <li className="has-sub" key={item.id}>
                <Link to="/">{item.name}</Link>
                {categoriesCreator(item.sabCategory)}
              </li>
            );
          }
          return (
            <li key={item.id}>
              <Link to="/">{item.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  };
  const className = classNames(`navigation ${show ? 'd-block' : 'd-none'}`, {
    regular: regular,
  });
  return <div className={className}>{categoriesCreator(categories)}</div>;
};

export default Categories;
