import React from "react";

export type TCurrentFilm = {
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
};

export type TProfession = {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  professionText: string;
  professionKey: string;
};

export type TState = {
  id: string;
  isLoading: boolean;
  error: string;
  film?: TCurrentFilm;
  posters: TImageItem[];
  trailers: string[]
};
export type TErrorApi = {
  error: number;
  message: string;
};

export type TGenre = {
  genre: string;
};

export type TFilm = {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: string;
  genres: TGenre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
};

export type TTopFilmsState = {
  isLoading: boolean;
  error: string;
  films: TFilm[];
  wallpapersIds?: number[];
  wallpapersLinks?: string[];
};

export type TRootProps = {
  children: React.ReactNode;
};

export type TMainFilmsProps = {
  films: TFilm[];
};

export type THeaderNavProps = {
  itemsStyle: string;
  authStyle: string;
};

export type THeaderProps = {
  isTransparent?: boolean;
};

export type TMainFilmsItemProps = {
  fetchFilm: () => void;
  film: TFilm;
  src: string;
};

export type TMaimFilmsListProps = {
  films: TFilm[];
};

export type TFilmPreviewProps = {
  cover: string;
  logo: string;
  width: number;
  height: number;
  film: TCurrentFilm;
};

export type TSize = {
  width: number;
  height: number;
};

export type TTrailerProps = {
  title: string;
  id: string;
};
export type TProfessionState = {
  isLoading: boolean;
  error: string;
  professions: TProfession[];
};

export type TImageItem = {
  imageUrl: string;
  previewUrl: string;
};

export type TImagesData = {
  total: number;
  totalPages: number;
  items: TImageItem[];
};

export type TMainFilmsStackProps = {
  i: number;
};

export type TSliderItemProps = {
  link: string;
};

export type IFilmDescriptionProps = {
  film: TCurrentFilm;
};

export type TFilmPosters = {
  posters: TImageItem[];
};
