import CharacterListItem from '../CharacterListItem/CharacterListItem';
import { useOutletContext } from 'react-router-dom';
import styles from './DisneyCharacters.module.css';
import { useState } from 'react';

const DisneyCharacters = () => {
  const [characters] = useOutletContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const CharsWithAtLeastOneMovie = characters.filter(
    (character) => character.films.length > 0
  );

  return (
    <div className={styles.background}>
      <div className={styles.characters_wrapper}>
        <h2 className={styles.header}>Disney Characters</h2>
        <div className={styles.headers}>
          <p>Picture</p>
          <p>Name</p>
          <p>Films Count</p>
          <p>Favorites</p>
        </div>
        {CharsWithAtLeastOneMovie.map((character, idx) => (
          <CharacterListItem
            key={idx}
            character={character}
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
          />
        ))}
      </div>
    </div>
  );
};
export default DisneyCharacters;
