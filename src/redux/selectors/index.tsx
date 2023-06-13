import { createSelector } from "reselect";
import { RootState } from "../store";

import currentFilmSelectors from "./../features/currentFilm/selectors";
import topFilmsSelectors from "./../features/topFilms/selectors";
import premiersSelectors from "./../features/premiers/selectors";
import currentProfessionsSelectors from "./../features/currentProfessions/selectors";

module Selectors {
  export const currentFilm = currentFilmSelectors;
  export const currentProfessions = currentProfessionsSelectors;
  export const topFilms = topFilmsSelectors;
  export const premiers = premiersSelectors;

  const _topFilms = (s: RootState) => s.topFilms.films;

  export const changeSize = createSelector(_topFilms, (tf) => {
    return tf?.length > 0 ? tf.slice(0, 12) : [];
  });
}

export default Selectors;
