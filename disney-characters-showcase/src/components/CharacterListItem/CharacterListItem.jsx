import { useState } from 'react';
import styles from './CharacterListItem.module.css';
import { toggleFavorites } from '../../utils/toggleFavorite';

const CharacterListItem = ({ character, isFavorite, setIsFavorite }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleHover = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = () => {
    toggleFavorites(character);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.list_item}>
      <div className={styles.img_wrapper}>
        <img
          className={styles.character_img}
          src={character.imageUrl ? character.imageUrl : 'no_image.png'}
          alt="disney character"
        />
      </div>
      <div className={styles.name_field}>
        <div>
          <p className={styles.name}>{character.name}</p>
        </div>
        {character.tvShows.length > 0 ? (
          <img
            onMouseEnter={handleHover}
            className={styles.tv_icon}
            src="tv.png"
          ></img>
        ) : null}
      </div>
      <p className={styles.list_element_wrapper}>{character.films.length}</p>

      <div className={styles.list_element_wrapper}>
        <button className={styles.star_btn} onClick={handleClick}>
          <img
            className={styles.star_icon}
            src={
              localStorage.getItem(character._id)
                ? 'star_full.png'
                : 'star_empty.png'
            }
            alt="star icon"
          />
        </button>
      </div>
    </div>
  );
};
export default CharacterListItem;
