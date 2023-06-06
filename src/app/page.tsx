"use client";

import React from "react";

import { fetchPremiers, fetchTopFilms, fetchWallpapers } from "@/redux/features/mockThunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/Selectors";

import MainSliderLoading from "@/components/mainSlider/skeleton";
import MainFilmsLoading from "@/components/mainFilms/skeleton";
import MainSlider from "@/components/mainSlider";
import MainFilms from "@/components/mainFilms";
import Header from "@/components/header";

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const films = useAppSelector(Selectors.changeSize);
  const wallpapersIds = useAppSelector(Selectors.wallpapersIds);
  const wallpapers = useAppSelector(Selectors.wallpapersLinks);

  const fetchAll = async () => {
    await dispatch(fetchPremiers());
    wallpapersIds && wallpapersIds.length && dispatch(fetchWallpapers(wallpapersIds));
  };

  React.useEffect(() => {
    dispatch(fetchTopFilms());
  }, [dispatch]);

  React.useEffect(() => {
    fetchAll();
  }, [wallpapersIds?.length]);

  return (
    <>
      <Header />
      {wallpapers && wallpapers.length > 0 ? <MainSlider /> : <MainSliderLoading />}
      {films && films.length > 0 ? <MainFilms films={films} /> : <MainFilmsLoading />}
    </>
  );
};

export default Home;
