import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// 1 - formato de cada dado armazenado na lista
export interface Assessment {
  id: string;
  title: string;
  rate: number;
  deadline: Date;
}

const assessmentsAdapter = createEntityAdapter({
  selectId: (assessment: Assessment) => assessment.id, // quando é "id" é opcional essa config
  sortComparer: (a, b) => a.title.localeCompare(b.title), // opcional, só se usa se quiser modificar a ordenação do array
});

const assessmentsSlice = createSlice({
  name: "assessments",
  initialState: assessmentsAdapter.getInitialState(),
  reducers: {
    // todas as ações possíveis para com esse estado

    // add
    addAssessment: assessmentsAdapter.addOne,

    // update
    updateAssessment: assessmentsAdapter.updateOne,

    // delete
    deleteAssessment: assessmentsAdapter.removeOne,

    // reset
    resetAssessments: assessmentsAdapter.removeAll,
  },
});

export const { addAssessment, updateAssessment, deleteAssessment, resetAssessments } =
  assessmentsSlice.actions;

export const assessmentsReducer = assessmentsSlice.reducer;

// list - listAssessments
// get - getAssessmentById
export const { selectAll: listAssessments, selectById: getAssessmentById } =
  assessmentsAdapter.getSelectors();
