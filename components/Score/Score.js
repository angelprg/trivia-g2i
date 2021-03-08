import React from "react";

import styles from "./Score.module.sass";

const Score = ({ total = 0, scored = 0 }) => {
  return (
    <div className={styles.scoreBadge}>
      <div className={styles.text}>You Scored</div>
      <div className={styles.score}>
        {scored} of {total}
      </div>
    </div>
  );
};

export default Score;
