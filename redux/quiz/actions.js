import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// uuidv4();
import {
  FETCH_QUIZZES,
  FETCH_QUIZZES_SUCCESS,
  FETCH_QUIZZES_ERROR,
  ANSWER_QUIZ,
  RESTART_QUIZZES,
} from "./types";

export const fetchQuizzesAction = () => {
  return async (dispatch) => {
    dispatch(fetchQuizzes());
    try {
      const { data } = await axios.get(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      );
      if (data?.response_code === 0 && data?.results?.length === 10) {
        const indexedQuizzes = data.results.map((quiz) => {
          return {
            ...quiz,
            uuid: uuidv4(),
          };
        });
        dispatch(fetchQuizzesSuccess(indexedQuizzes));
      } else throw new Error("Error fetching Quizzes :(");
    } catch (error) {
      dispatch(fetchQuizzesError(error.message));
    }
  };
};

export const fetchQuizzes = () => ({ type: FETCH_QUIZZES });

export const fetchQuizzesSuccess = (quizzes) => ({
  type: FETCH_QUIZZES_SUCCESS,
  payload: quizzes,
});

export const fetchQuizzesError = (error) => ({
  type: FETCH_QUIZZES_ERROR,
  payload: error,
});

export const answerQuiz = (uuid, answer) => ({
  type: ANSWER_QUIZ,
  payload: { uuid, answer },
});

export const restartQuiz = () => ({ type: RESTART_QUIZZES });
