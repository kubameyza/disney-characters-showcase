export const toggleFavorites = (character) => {
  !localStorage.getItem(character._id)
    ? localStorage.setItem(character._id, JSON.stringify(character))
    : localStorage.removeItem(character._id);
};
