import { createSelector } from "reselect";
import { RootState } from "../store";

module Selectors {
  export const topFilms = (s: RootState) => s.topFilms.films;
  export const currentFilm = (s: RootState) => s.currentFilm.film;
  export const wallpapersIds = (s: RootState) => s.premiers.wallpapersIds;
  export const wallpapersLinks = (s: RootState) => s.premiers.wallpapersLinks;

  export const changeSize = createSelector(topFilms, (tf) => {
    return tf?.length > 0 ? tf.slice(0, 12) : [];
  });
}
export default Selectors;
