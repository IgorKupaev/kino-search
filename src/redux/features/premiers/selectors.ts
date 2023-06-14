import { RootState } from "../../store";

module Selectors {
  export const wallpapersIds = (s: RootState) => s.premiers.wallpapersIds;
  export const wallpapersLinks = (s: RootState) => s.premiers.wallpapersLinks;
}

export default Selectors;
