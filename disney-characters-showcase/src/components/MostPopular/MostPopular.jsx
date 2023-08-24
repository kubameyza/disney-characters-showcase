import { useEffect, useState } from 'react';
import CharacterCard from '../DisneyCharacters/CharacterCard/Charactercard';
import styles from './MostPopular.module.css';

const MostPopular = ({ characters }) => {
  const [mostPopular, setMostPopular] = useState([]);

  const getMostPopular = () => {
    const sorted = characters.sort((a, b) =>
      a.films.length < b.films.length ? 1 : -1
    );
    const topThree = sorted.slice(0, 3);
    setMostPopular(topThree);
  };

  useEffect(() => {
    getMostPopular();
  }, [characters]);

  return (
    <div className={styles.wrapper}>
      <h1>Most popular Disney Characters</h1>
      <div className={styles.cards}>
        {mostPopular.map((character, idx) => (
          <CharacterCard character={character} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default MostPopular;
