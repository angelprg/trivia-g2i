import React from "react";

import ResultItem from "components/ResultItem/ResultItem";

import styles from "./ResultList.module.sass";

const ResultList = ({ results = [] }) => {
  return (
    <div className={styles.resultsContainer}>
      {results.map((r) => (
        <ResultItem key={r.uuid} question={r} />
      ))}
    </div>
  );
};

export default ResultList;
