import React from "react";

import styles from "./Logo.module.sass";
import logoSrc from "assets/img/g2i_logo.png";

const Logo = () => {
  return <img src={logoSrc} alt="Logo G2I" className={styles.logo} />;
};

export default Logo;
