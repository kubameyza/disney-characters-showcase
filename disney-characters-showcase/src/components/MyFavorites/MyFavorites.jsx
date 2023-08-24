import { useEffect, useState } from 'react';
import styles from './MyFavorites.module.css';
import CharacterListItem from '../CharacterListItem/CharacterListItem';
import SearchBar from '../Searchbar/Searchbar';

const MyFavorites = () => {
  const [characters, setCharacters] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [search, setSearch] = useState([]);

  const CharsWithAtLeastOneMovie = characters.filter(
    (character) => character.films.length > 0
  );

  const getFilteredItems = () => {
    const searched = CharsWithAtLeastOneMovie.filter((character) =>
      character.name.toLowerCase().includes(search)
    );
    return searched;
  };

  const filteredItems = getFilteredItems();

  const getFavorites = () => {
    const keys = Object.keys(localStorage);
    const favorites = keys.map((key) => ({
      ...JSON.parse(localStorage.getItem(key)),
    }));
    setCharacters(favorites);
  };

  useEffect(() => {
    getFavorites();
  }, [isFavorite]);

  return (
    <div className={styles.background}>
      <div className={styles.characters_wrapper}>
        <div className={styles.background}>
          <div className={styles.favorite_characters}>
            <h2 className={styles.header}>My favorite characters</h2>
            <SearchBar setSearch={setSearch} />
            {filteredItems?.map((character) => (
              <CharacterListItem
                key={character.name}
                character={character}
                isFavorite={isFavorite}
                setIsFavorite={setIsFavorite}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyFavorites;
