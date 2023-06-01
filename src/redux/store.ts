import { configureStore } from "@reduxjs/toolkit";

import topFilmsReducer from "./features/topFilmsSlice";
import currentFilmReducer from "./features/currentFilmSlice";
import currentProfessions from "./features/currentProfessions";

export const store = configureStore({
  reducer: {
    topFilms: topFilmsReducer,
    currentFilm: currentFilmReducer,
    currentProfessions: currentProfessions
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
