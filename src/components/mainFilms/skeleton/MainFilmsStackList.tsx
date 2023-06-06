import React from "react";

import MainFilmsStack from "./MainFilmsStack";

const skeletons = new Array(12).fill(null);

const MainFilmsStackList = () => {
  return (
    <>
      {skeletons.map((_, i) => (
        <MainFilmsStack key={i} i={i} />
      ))}
    </>
  );
};

export default MainFilmsStackList;
