import React, { useState } from "react";

import { Button } from "components";

import styles from "./ResponseButtons.module.sass";

const ResponseButtons = ({ onResponse = () => {} }) => {
  const [buttonsEnabled, setButtonsEnabled] = useState(true);

  // Delay to prevent double-click errors
  const handleClick = (val) => {
    if (buttonsEnabled) {
      setButtonsEnabled(false);
      onResponse(val);
      setTimeout(() => setButtonsEnabled(true), 500);
    }
  };

  return (
    <div className={styles.responseButtons}>
      <Button secondary onClick={() => handleClick("True")}>
        True
      </Button>
      <Button primary onClick={() => handleClick("False")}>
        False
      </Button>
    </div>
  );
};

export default ResponseButtons;
