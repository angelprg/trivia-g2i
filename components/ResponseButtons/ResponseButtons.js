import React from "react";

import { Button } from "components";

import styles from "./ResponseButtons.module.sass";

const ResponseButtons = ({ onResponse = () => {} }) => {
  return (
    <div className={styles.responseButtons}>
      <Button secondary onClick={() => onResponse("True")}>
        True
      </Button>
      <Button primary onClick={() => onResponse("False")}>
        False
      </Button>
    </div>
  );
};

export default ResponseButtons;
