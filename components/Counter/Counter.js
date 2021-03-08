import React from "react";

import styles from "./Counter.module.sass";

const Counter = ({ total = 0, current = 0 }) => {
  return (
    <div className={styles.counter}>
      {current} of {total}
    </div>
  );
};

export default Counter;
