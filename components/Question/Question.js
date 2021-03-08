import React from "react";

import styles from "./Question.module.sass";
import he from "he";

const Question = ({ question }) => {
  return <div className={styles.question}>{he.decode(question)}</div>;
};

export default Question;
