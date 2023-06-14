"use client";

import React from "react";

import { fetchPremiers, fetchWallpapers } from "@/redux/features/premiers/thunks";
import { fetchTopFilms } from "@/redux/features/topFilms/thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/selectors";

import MainSliderLoading from "@/components/mainSlider/skeleton";
import MainFilmsLoading from "@/components/mainFilms/skeleton";
import MainSlider from "@/components/mainSlider";
import MainFilms from "@/components/mainFilms";
import Header from "@/components/header";

const Home = (): JSX.Element => {
  const films = useAppSelector(Selectors.changeSize);
  const wallpapersIds = useAppSelector(Selectors.premiers.wallpapersIds);
  const wallpapers = useAppSelector(Selectors.premiers.wallpapersLinks);

  const MainSliderComponent = React.useCallback(() => {
    return wallpapers && wallpapers.length > 0 ? <MainSlider /> : <MainSliderLoading />;
  }, [wallpapers]);

  const MainFilmsComponent = React.useCallback(() => {
    return films && films.length > 0 ? <MainFilms /> : <MainFilmsLoading />;
  }, [films]);

  const dispatch = useAppDispatch();

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
      <MainSliderComponent />
      <MainFilmsComponent />
    </>
  );
};

export default Home;
