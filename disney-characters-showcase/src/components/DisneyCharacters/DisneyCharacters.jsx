import CharacterListItem from '../CharacterListItem/CharacterListItem';
import { useOutletContext } from 'react-router-dom';
import styles from './DisneyCharacters.module.css';

const DisneyCharacters = () => {
  const [characters] = useOutletContext();

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
        {characters.map((character, idx) => (
          <CharacterListItem key={idx} character={character} />
        ))}
      </div>
    </div>
  );
};
export default DisneyCharacters;
