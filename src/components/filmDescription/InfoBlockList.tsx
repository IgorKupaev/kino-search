import React from "react";
import InfoBlock from "./InfoBlock";
import { useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/selectors";

const InfoBlockList = () => {
    enum profs {
    director = "DIRECTOR",
    writer = "WRITER",
  }
  const writer = useAppSelector(Selectors.currentProfessions.writer);
  const director = useAppSelector(Selectors.currentProfessions.director);
  const film = useAppSelector(Selectors.currentFilm.currentFilm)
  return (
    <>
      <InfoBlock body={director} title={profs.director} />
      <InfoBlock body={writer} title={profs.writer} />
      <InfoBlock body={film ? film.year : ""} title="Release Date" />
      <InfoBlock body={film ? film.filmLength + " MINUTES" : ""} title="Running Time" />
    </>
  );
};

export default InfoBlockList;
