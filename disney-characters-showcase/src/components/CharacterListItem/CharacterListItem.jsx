import { useState } from 'react';
import styles from './CharacterListItem.module.css';
import { toggleFavorites } from '../../utils/toggleFavorite';

const CharacterListItem = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    toggleFavorites(character);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.list_item}>
      <div className={styles.img_wrapper}>
        <img
          className={styles.character_img}
          src={character.imageUrl}
          alt="disney character"
        />
      </div>
      <div className={styles.name_field}>
        <div>
          <p className={styles.name}>{character.name}</p>
        </div>
        {character.tvShows.length > 0 ? (
          <img className={styles.tv_icon} src="tv.png"></img>
        ) : null}
      </div>
      <p className={styles.list_element_wrapper}>{character.films.length}</p>

      <div className={styles.list_element_wrapper}>
        <button className={styles.star_btn} onClick={handleClick}>
          <img
            className={styles.star_icon}
            src={isFavorite ? 'star_full.png' : 'star_empty.png'}
            alt="star icon"
          />
        </button>
      </div>
    </div>
  );
};
export default CharacterListItem;
