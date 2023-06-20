import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

enum profs {
  director = "DIRECTOR",
  writer = "WRITER",
}

module Selectors {
  export const professions = (s: RootState) => s.currentProfessions.professions;

  export const director = createSelector(professions, (professions) => {
    if (Array.isArray(professions)) {
      const searchedDirector = professions.find((prof) => prof.professionKey === profs.director);
      if (searchedDirector) return searchedDirector.nameEn || searchedDirector.nameRu;
    }
    return '';
  });
  export const writer = createSelector(professions, (professions) => {
    if (Array.isArray(professions)) {
      const searchedWriter = professions.find((prof) => prof.professionKey === profs.writer);
      if (searchedWriter) return searchedWriter.nameEn || searchedWriter.nameRu;
    }
    return '';
  });
}

export default Selectors;
