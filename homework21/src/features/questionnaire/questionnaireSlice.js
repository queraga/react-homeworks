import { createSlice } from "@reduxjs/toolkit";

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState: {
    questions: [
      {
        id: 1,
        text: "Married or no?",
        options: ["yes", "no"],
      },
      {
        id: 2,
        text: "Driving car?",
        options: ["yes", "no"],
      },
    ],
    answers: {},
    submitted: false,
    result: null,
  },
  reducers: {
    answerQuestion(state, action) {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },

    submitAnswers(state) {
      const values = Object.values(state.answers);

      const yesCount = values.filter((v) => v === "yes").length;
      const noCount = values.filter((v) => v === "no").length;

      state.submitted = true;
      state.result = yesCount > noCount ? "Mostly YES" : "Mostly NO";
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
