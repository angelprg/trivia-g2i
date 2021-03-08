import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, ResultList, Score } from "components";
import styles from "./Results.module.sass";
import { useSelector } from "react-redux";
import Link from "next/link";

const countCorrects = (list) =>
  list.reduce((acc, item) => (acc += item?.correct ? 1 : 0), 0);

const Results = () => {
  const router = useRouter();
  const quizzes = useSelector((state) => state.quiz.quizzes);
  useEffect(() => {
    if (quizzes === null && router) router.push("/");
  }, []);
  if (quizzes?.length > 0)
    return (
      <div className={styles.resultsContainer}>
        <Score total={quizzes.length} scored={countCorrects(quizzes)} />
        <ResultList results={quizzes} />
        <Button secondary>
          <Link href="/quiz">Play Again?</Link>
        </Button>
      </div>
    );
  else return null;
};

export default Results;
