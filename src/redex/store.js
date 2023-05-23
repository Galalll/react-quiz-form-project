import { configureStore } from "@reduxjs/toolkit";
import MyQuizReducer from "./slices/quiz";
export default configureStore({
  reducer: {
    quiz: MyQuizReducer,
  },
});
