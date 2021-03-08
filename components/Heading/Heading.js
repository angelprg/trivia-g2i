import React from "react";

import styles from "./Heading.module.sass";

const Heading = ({ children }) => {
  return <h1 className={styles.h1}>{children}</h1>;
};

export default Heading;
