import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { ClockLoader } from "react-spinners";

import { StyledBackground } from "layouts";
import { Category, Counter, Question, ResponseButtons } from "components";

import styles from "./Quiz.module.sass";
import { fetchQuizzesAction, answerQuiz } from "redux/quiz/actions";

const Quiz = () => {
  const router = useRouter();

  const quizzes = useSelector((state) => state.quiz.quizzes);
  const quizzes_loading = useSelector((state) => state.quiz.quizzes_loading);
  const quizzes_error = useSelector((state) => state.quiz.quizzes_error);
  const current_quiz = useSelector((state) => state.quiz.current_quiz);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchQuizzesAction()), []);

  useEffect(() => {
    if (current_quiz >= 9) {
      router.push("/result");
    }
  }, [current_quiz]);

  const handleResponse = (response) => {
    dispatch(answerQuiz(quizzes?.[current_quiz]?.uuid, response));
  };

  if (quizzes_error)
    return (
      <div className={styles.quizContainer}>
        <div className="error">{quizzes_error}</div>
      </div>
    );
  else if (quizzes_loading || quizzes === null)
    return (
      <div className={styles.quizContainer}>
        <ClockLoader size={100} />
      </div>
    );
  return (
    <div className={styles.quizContainer}>
      <StyledBackground roundedBottom>
        <Category category={quizzes?.[current_quiz]?.category} />
        <Question question={quizzes?.[current_quiz]?.question} />
      </StyledBackground>
      <Counter total={10} current={current_quiz + 1} />
      <ResponseButtons onResponse={handleResponse} />
    </div>
  );
};

export default Quiz;
