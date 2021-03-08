import React from "react";

import styles from "./Error.module.sass";

const Error = (msg) => {
  return (
    <div className={styles.container}>
      <div className={styles.error}>{msg}</div>
    </div>
  );
};

export default Error;
