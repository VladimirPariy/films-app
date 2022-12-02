import React, { FC } from "react";

import styles from "components/ui/error/error.module.scss";
import { ErrorPayload } from "store/store-types";

interface Props {
  error: ErrorPayload;
}

const Error: FC<Props> = ({ error }) => {
  return (
    <div className={styles.error}>
      An error has occurred ({error.status_message}).
      <div> Try again later </div>
    </div>
  );
};

export { Error };
