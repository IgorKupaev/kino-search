import { createSelector } from "reselect";
import { RootState } from "../store";

module Selectors {
  export const topFilms = (s: RootState) => s.topFilms.films;
  export const currentFilm = (s: RootState) => s.currentFilm.film;

  export const changeSize = createSelector(topFilms, (tf) => {
    return tf.length > 0 ? tf.slice(0, 12) : [];
  });
}
export default Selectors;
