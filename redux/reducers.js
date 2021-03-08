import { combineReducers } from "redux";
import quizReducer from "./quiz/reducer";

const reducer = combineReducers({
  quiz: quizReducer,
});

export default reducer;
