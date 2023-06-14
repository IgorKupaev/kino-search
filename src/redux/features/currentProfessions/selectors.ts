import { RootState } from "../../store";

module Selectors {
  export const professions = (s: RootState) => s.currentProfessions.professions;
}

export default Selectors;
