import { Link } from 'react-router-dom';
import categories from 'data/categories.json';

const Categories = ({ show }) => {
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
  return (
    <div className={`navigation ${show ? 'd-block' : 'd-none'}`}>
      {categoriesCreator(categories)}
    </div>
  );
};

export default Categories;
