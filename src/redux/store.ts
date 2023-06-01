import { configureStore } from "@reduxjs/toolkit";

import topFilmsReducer from "./features/topFilmsSlice";
import premiersReducer from "./features/premiersSlice";
import currentFilmReducer from "./features/currentFilmSlice";
import currentProfessionsReducer from "./features/currentProfessions";

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
