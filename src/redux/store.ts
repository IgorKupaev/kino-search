import { configureStore } from "@reduxjs/toolkit";

import topFilmsReducer from "./features/topFilms/topFilmsSlice";
import premiersReducer from "./features/premiers/premiersSlice";
import currentFilmReducer from "./features/currentFilm/currentFilmSlice";
import currentProfessionsReducer from "./features/currentProfessions/currentProfessions";

export const store = configureStore({
  reducer: {
    topFilms: topFilmsReducer,
    premiers: premiersReducer,
    currentFilm: currentFilmReducer,
    currentProfessions: currentProfessionsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
