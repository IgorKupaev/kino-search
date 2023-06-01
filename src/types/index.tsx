import React from "react";

export interface ICurrentFilm {
  coverUrl: string;
  posterUrl: string;
  posterUrlPreview: string;
  webUrl: string;
  logoUrl: string;

  nameEn: string | null;
  nameOriginal: string | null;
  nameRu: string | null;

  description: string;
  slogan: string;
  shortDescription: string;
  ratingKinopoisk: number;
  ratingImdb: number;

  filmLength: number;
  imdbId: string;
  kinopoiskId: number;
  year: number;
}

export interface IProfession {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  professionText: string;
  professionKey: string;
}

export type State = {
  id: string;
  isLoading: boolean;
  error: string;
  film?: ICurrentFilm;
};
export interface ErrorApi {
  error: number;
  message: string;
}

export interface genre {
  genre: string;
}

export interface film {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: string;
  genres: genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface topFilmsState {
  isLoading: boolean;
  error: string;
  films: film[];
}

export interface IRootProps {
  children: React.ReactNode;
}

export interface IMainFilmsProps {
  films: film[];
}

export interface IHeaderNavProps {
  itemsStyle: string;
  authStyle: string;
}

export interface IHeaderProps {
  isTransparent?: boolean;
}

export interface IMainFilmsItemProps {
  fetchFilm: () => void;
  film: film;
  src: string;
}

export interface IMaimFilmsListProps {
  films: film[];
}

export interface IFilmPreviewProps {
  cover: string;
  logo: string;
  width: number;
  height: number;
  film: ICurrentFilm;
}

export type TSize = {
  width: number;
  height: number;
};

export interface ITrailerProps {
  title: string;
  id: string;
}
export interface ProfessionState {
  isLoading: boolean;
  error: string;
  professions: IProfession[]
}
