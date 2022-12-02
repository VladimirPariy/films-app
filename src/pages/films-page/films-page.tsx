import React, { FC } from "react";

import { AllFilms } from "components/all-films-layout/all-films";
import { Observer } from "components/observer/observer";

const FilmsPage: FC = () => {
  return (
    <>
      <AllFilms />
      <Observer />
    </>
  );
};

export default FilmsPage;
