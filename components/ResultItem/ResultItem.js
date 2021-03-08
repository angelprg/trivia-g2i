import React from "react";
import he from "he";
import classNames from "classnames";

import styles from "./ResultItem.module.sass";
import correctIcon from "assets/img/confirm.svg";
import incorrectIcon from "assets/img/cancel.svg";

const ResultItem = ({ question = {} }) => {
  console.log({ question });
  return (
    <div className={styles.resultRow}>
      <img
        className={styles.icon}
        src={question.correct ? correctIcon : incorrectIcon}
      />
      <div
        className={classNames(styles.question, {
          [styles.false]: question.correct_answer === "False",
        })}
      >
        {`${question.correct_answer}: ${he.decode(question.question)}`}
      </div>
    </div>
  );
};

export default ResultItem;
