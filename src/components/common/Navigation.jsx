import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLeft}>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/protected-page" className={styles.link}>
            ProtectedPage
          </Link>
        </li>
      </ul>
      <ul className={styles.navRight}>
        <li>
          <Link to="/account" className={styles.link}>
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
