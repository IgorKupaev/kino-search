import React from 'react';

import type { FC } from 'react';

import styles from './FilmDescription.module.scss';
import { ICurrentFilm, IProfession } from '@/types';
import InfoBlock from './InfoBlock';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchProfessions } from '@/redux/features/actionCreators';

interface IFilmDescriptionProps {
  film: ICurrentFilm
}

enum profs {
  director = "DIRECTOR",
  writer = "WRITER"
}

const FilmDescription: FC<IFilmDescriptionProps> = ({ film }): JSX.Element => {
  const dispatch = useAppDispatch();
  const id = Number(useAppSelector((state) => state.currentFilm.id));
  const professions = useAppSelector((state) => state.currentProfessions.professions);

  const [director, setDirector] = React.useState<string>('');
  const [writer, setWriter] = React.useState<string>('');

  React.useEffect(() => {
    dispatch(fetchProfessions(id));
  }, [dispatch, id]);

  React.useEffect(() => {
    if (Array.isArray(professions)) {
      const searchedDirector = professions.find((prof) => prof.professionKey === profs.director);
      if (searchedDirector) setDirector(searchedDirector.nameEn || searchedDirector.nameRu);

      const searchedWriter = professions.find((prof) => prof.professionKey === profs.writer);
      if (searchedWriter) setWriter(searchedWriter.nameEn || searchedWriter.nameRu);
    }
  }, [professions])

  return (
    <div className={styles.filmBody}>
    <div className={styles.filmBodyContainer}>
      <div className={styles.filmInfo}>
        <h2 className={styles.filmSloganTitle}>{film?.slogan}</h2>
        <h3 className={styles.filmInfoTitle}>overview</h3>
        <div className={styles.filmInfoDescription}>
          <div>{film?.description}</div>
        </div>
        <InfoBlock body={director} title={profs.director} />
        <InfoBlock body={writer} title={profs.writer} />
        <InfoBlock body={String(film.year)} title='Release Date' />
        <InfoBlock body={String(film.filmLength) + ' MINUTES'} title='Running Time' />
      </div>
    </div>
  </div>
  )
}

export default FilmDescription;