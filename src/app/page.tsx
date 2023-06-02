"use client";

import React from "react";

import { useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/Selectors";

import Header from "../components/header";
import MainFilms from "../components/mainFilms";
import MainSlider from "../components/mainSlider";

import type { FC } from 'react';

const Home: FC = (): JSX.Element => {
  const films = useAppSelector(Selectors.changeSize);

  return (
    <>
      <Header />
      <MainSlider />
      <MainFilms films={films} />
    </>
  );
};

export default Home;
