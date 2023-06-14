import { RootState } from "../../store";

module Selectors {
  export const posters = (s: RootState) => s.currentFilm.posters;
  export const currentFilm = (s: RootState) => s.currentFilm.film;
  export const trailers = (s: RootState) => s.currentFilm.trailers;
  export const isActiveFilm = (s: RootState) => s.currentFilm.isActive;
  export const currentWallpapers = (s: RootState) => s.currentFilm.wallpapers;
  export const wallpaper = (s: RootState) => s.currentFilm.currentWallpaper;
  export const id = (s: RootState) => s.currentFilm.id;
}

export default Selectors;
