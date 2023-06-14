import { RootState } from "../../store";

module Selectors {
  export const topFilms = (s: RootState) => s.topFilms.films;
}

export default Selectors;
