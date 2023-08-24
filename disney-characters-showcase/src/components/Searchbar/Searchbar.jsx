import styles from './SearchBar.module.css';

const SearchBar = ({ setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form className={styles.search_bar}>
        <input
          onChange={handleChange}
          placeholder="Search"
          className={styles.search_bar_input}
          type="text"
        />
      </form>
    </div>
  );
};
export default SearchBar;
