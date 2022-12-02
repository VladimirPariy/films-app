import React, { ChangeEvent, FC } from "react";

import styles from "components/ui/input/input.module.scss";

interface Props {
  inputID: string;
  inputType: string;
  value: string;
  labelText: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = (props) => {
  const { inputType, inputID, value, changeHandler, labelText } = props;
  return (
    <>
      <label htmlFor={inputID} className={styles.label}>
        {labelText}
      </label>
      <input
        type={inputType}
        id={inputID}
        value={value}
        onChange={changeHandler}
        className={styles.input}
      />
    </>
  );
};

export { Input };
