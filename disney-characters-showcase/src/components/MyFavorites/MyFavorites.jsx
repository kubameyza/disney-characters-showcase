import { useEffect, useState } from 'react';
import styles from './MyFavorites.module.css';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

const MyFavorites = () => {
  const [characters, setCharacters] = useState([]);

  const getFavorites = () => {
    const keys = Object.keys(localStorage);
    const favorites = keys.map((key) => ({
      ...JSON.parse(localStorage.getItem(key)),
    }));
    console.log(favorites);
    setCharacters(favorites);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.characters_wrapper}>
        <div className={styles.background}>
          <div className={styles.favorite_characters}>
            <h2 className={styles.header}>My favorite characters</h2>
            {characters?.map((character) => (
              <CharacterListItem key={character.name} character={character} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyFavorites;
