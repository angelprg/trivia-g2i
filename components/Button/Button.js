import React from "react";
import classNames from "classnames";

import styles from "./Button.module.sass";

const Button = ({ primary = false, secondary = false, children, onClick }) => {
  return (
    <div
      className={classNames(
        styles.button,
        { [styles.buttonSecondary]: secondary },
        { [styles.buttonPrimary]: primary }
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
