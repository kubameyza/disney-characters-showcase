export const toggleFavorites = (character, data, setData) => {
  !localStorage.getItem(character._id)
    ? localStorage.setItem(character._id, JSON.stringify(character))
    : localStorage.removeItem(character._id);
  setData(!data);
};
