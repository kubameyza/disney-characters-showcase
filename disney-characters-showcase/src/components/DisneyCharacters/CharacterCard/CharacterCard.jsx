/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './CharacterCard.module.css';

const CharacterCard = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.character_image}
        src={character.imageUrl}
        alt="disney character"
      />
      <div>
        <div className={styles.name_section}>
          <p>{character.name}</p>
          <button onClick={handleClick} className={styles.star_button}>
            <img
              className={styles.star}
              src={isFavorite ? 'star_full.png' : 'star_empty.png'}
              alt="yellow star"
            />
          </button>
        </div>
        <div className={styles.info_section}>
          <div className={styles.films}>
            <p>Films:</p>
            <p>{character.films.length}</p>
          </div>
          <div className={styles.shows}>
            <p>Tv shows:</p>
            <p>{character.tvShows.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterCard;
