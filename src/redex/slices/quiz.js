import { createSlice } from "@reduxjs/toolkit";

export const quiz = createSlice({
  name: "MyQuiz",
  initialState: {
    UserName: "",
    Email: "",
    Result: 0,
    Review: "",
    IsLoged: false,
  },
  reducers: {
    setUserName: (state, action) => {
      state.UserName = action.payload;
      
    },
    setEmail: (state, action) => {
      state.Email = action.payload;
    },
    setResult: (state) => {
      state.Result += 20;
    },
    setReview: (state, action) => {
      state.Review = action.payload;
    },
    setIsLoged: (state, action) => {
      state.IsLoged = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserName, setEmail, setResult, Review, setIsLoged } =
  quiz.actions;

export default quiz.reducer;
