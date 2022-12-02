import React, { FC, MouseEvent, ReactNode } from "react";

interface Props {
  className: string | undefined;
  clickHandler: (e: MouseEvent, ID: number) => void;
  children: ReactNode;
  ID: number;
}

const AddInWatchlistBtn: FC<Props> = (props) => {
  const { ID, children, className, clickHandler } = props;
  return (
    <button onClick={(e) => clickHandler(e, ID)} className={className}>
      {children}
    </button>
  );
};

export { AddInWatchlistBtn };
