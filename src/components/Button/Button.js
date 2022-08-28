import React from "react";
import styles from "./styles";

export const Button = ({ value, setValue }) => {
  const classes = styles();
  return (
    <div
      key={value}
      className={classes.button}
      onChange={(e) => setValue(e.target.value)}
    >
      {value}
    </div>
  );
};
