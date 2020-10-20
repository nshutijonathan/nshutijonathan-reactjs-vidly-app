export const genres = [
  {
    _id: "1rsr",
    name: "Action",
  },
  {
    _id: "wwwdc",
    name: "Comedy",
  },
  {
    _id: "33eedbvb",
    name: "Thriller",
  },
];
export const getGenres = () => {
  return genres.filter((g) => g);
};
