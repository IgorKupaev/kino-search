"use client";

import React, { Suspense } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/Selectors";

import Header from "../components/header";
import MainFilms from "../components/mainFilms";
import MainSlider from "../components/mainSlider";

import type { FC } from 'react';
import { CircularProgress } from "@mui/material";
import { fetchPremiers, fetchTopFilms, fetchWallpapers } from "@/redux/features/mockThunks";
import MainSliderLoading from "@/components/mainSlider/MainSliderLoading";
import MainFilmsLoading from "@/components/mainFilms/MainFilmsLoading";

const Home: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchTopFilms());
  }, [dispatch]);

  const films = useAppSelector(Selectors.changeSize);
  const wallpapersIds = useAppSelector(Selectors.wallpapersIds);
  const wallpapers = useAppSelector(Selectors.wallpapersLinks);
  

  const fetchAll = async () => {
    await dispatch(fetchPremiers());
    wallpapersIds && wallpapersIds.length && dispatch(fetchWallpapers(wallpapersIds));
  };

  React.useEffect(() => {
    fetchAll();
  }, [wallpapersIds?.length]);

  return (
    <>
      <Header />
      {wallpapers && wallpapers.length > 0 ? <MainSlider /> : <MainSliderLoading /> }
      {films && films.length > 0 ? <MainFilms films={films} /> : <MainFilmsLoading />}
    </>
  );
};

export default Home;
