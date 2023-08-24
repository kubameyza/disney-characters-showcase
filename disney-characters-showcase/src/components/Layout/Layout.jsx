import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import MostPopular from '../MostPopular/MostPopular';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';
import { useEffect, useState } from 'react';

const Layout = () => {
  const [characters, setCharacters] = useState([]);

  const getCharactersData = async () => {
    const response = await fetch(
      'https://api.disneyapi.dev/character?pageSize=100'
    );
    const characters = await response.json();
    setCharacters(characters.data);
  };

  useEffect(() => {
    getCharactersData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.most_popular}>
        <MostPopular characters={characters} />
      </div>
      <div className={styles.page_content}>
        <Outlet context={[characters, setCharacters]} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
