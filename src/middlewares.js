const genres = (array) => {
  array
    .toString()
    .split(",")
    .map((x) => "#" + x);
};
