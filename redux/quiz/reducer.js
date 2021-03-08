import {
  FETCH_QUIZZES,
  FETCH_QUIZZES_SUCCESS,
  FETCH_QUIZZES_ERROR,
  ANSWER_QUIZ,
  RESTART_QUIZZES,
} from "./types";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZZES:
      return {
        ...state,
        quizzes: null,
        quizzes_loading: true,
        quizzes_error: null,
      };
    case FETCH_QUIZZES_SUCCESS:
      return {
        ...state,
        quizzes: action.payload,
        quizzes_loading: false,
        quizzes_error: null,
        current_quiz: 0,
      };

    case FETCH_QUIZZES_ERROR:
      return {
        ...state,
        quizzes: null,
        quizzes_loading: false,
        quizzes_error: action.payload,
      };

    case ANSWER_QUIZ:
      let current_quiz = state.current_quiz;
      const quizzes = state.quizzes.map((item) => {
        if (item.uuid === action.payload.uuid) {
          current_quiz += 1;
          return {
            ...item,
            correct: action.payload.answer === item.correct_answer,
          };
        }
        return item;
      });
      return {
        ...state,
        quizzes,
        current_quiz,
      };

    case RESTART_QUIZZES:
      return initialState;

    default:
      return state;
  }
};
export default reducer;
