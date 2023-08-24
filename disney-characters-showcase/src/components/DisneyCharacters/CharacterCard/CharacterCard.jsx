/* eslint-disable react/prop-types */
import styles from './CharacterCard.module.css';

const CharacterCard = ({ character }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img_wrapper}>
        <img
          className={styles.character_image}
          src={character.imageUrl ? character.imageUrl : 'no_image.png'}
          alt="disney character"
        />
      </div>
      <div>
        <div className={styles.name_section}>
          <p>{character.name}</p>
        </div>
        <div className={styles.info_section}>
          <div className={styles.films}>
            <p>Films:</p>
            <p>{character?.films?.length}</p>
          </div>
          <div className={styles.shows}>
            <p>Tv shows:</p>
            <p>{character?.tvShows?.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterCard;
