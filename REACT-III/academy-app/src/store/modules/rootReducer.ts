import { combineReducers } from "@reduxjs/toolkit";
import { assessmentsReducer } from "./assessments/assessmentsSlice";
import { themeReducer } from "./theme/themeSlice";

export const rootReducer = combineReducers({
  theme: themeReducer,
  assessments: assessmentsReducer,
});
