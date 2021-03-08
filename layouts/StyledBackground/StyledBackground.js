import React from "react";

import styles from "./StyledBackground.module.sass";

import classNames from "classnames";

const StyledBackground = ({
  children,
  roundedUp = false,
  roundedBottom = false,
}) => {
  return (
    <div
      className={classNames(
        styles.background,
        { [styles.roundedUp]: roundedUp },
        { [styles.roundedBottom]: roundedBottom }
      )}
    >
      {children}
    </div>
  );
};

export default StyledBackground;
