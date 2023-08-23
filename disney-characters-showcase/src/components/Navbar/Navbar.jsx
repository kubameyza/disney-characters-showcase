import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>disney</div>
      <NavLink className={styles.link} to="/">
        Disney characters
      </NavLink>
      <NavLink className={styles.link} to="/myfavorites">
        My favorites
      </NavLink>
    </div>
  );
};
export default Navbar;
