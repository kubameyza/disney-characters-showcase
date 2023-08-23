import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import MostPopular from '../MostPopular/MostPopular';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.app}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.most_popular}>
        <MostPopular />
      </div>
      <div className={styles.page_content}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
