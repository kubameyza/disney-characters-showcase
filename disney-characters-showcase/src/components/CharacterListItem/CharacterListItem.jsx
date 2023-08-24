import styles from './CharacterListItem.module.css';

const CharacterListItem = ({ character }) => {
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
        <img
          className={styles.star_icon}
          src="star_empty.png"
          alt="star icon"
        />
      </div>
    </div>
  );
};
export default CharacterListItem;
