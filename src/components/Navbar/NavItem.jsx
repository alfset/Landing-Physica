import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const NavItem = (props) => {
  const {
    children = 'Home',
    target,
    url = '#',
    textColor = 'text-black dark:text-white',
  } = props;

  return (
    <li className="py-1" tabIndex={0}>
      <Link to={url} target={target} className={`${textColor}`}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
