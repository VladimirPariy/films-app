import React, { FC, useRef } from "react";

import { useObserver } from "lib/hooks/use-observer";

import {
  selectCurrentPage,
  selectIsLoading,
  selectTotalPageCount,
} from "store/selectors/films-selectors";
import { setCurrentPage } from "store/actions/films-actions";
import { useAppDispatch, useAppSelector } from "store/store-types";

const Observer: FC = () => {
  const dispatch = useAppDispatch();
  const lastElemRef = useRef<HTMLDivElement>(null);

  const isLoading = useAppSelector(selectIsLoading);
  const totalPages = useAppSelector(selectTotalPageCount);
  const currentPage = useAppSelector(selectCurrentPage);

  useObserver(lastElemRef, currentPage < totalPages, isLoading, () =>
    dispatch(setCurrentPage())
  );

  return <div ref={lastElemRef} style={{ height: "20px" }} />;
};

export { Observer };
