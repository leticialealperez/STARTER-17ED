import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";
import {
  createAssessment,
  deleteAssessment,
  fetchAllAssessments,
  updateAssessment,
} from "./assessments.actions";

// 1 - formato de cada dado armazenado na lista
export interface Assessment {
  id: string;
  title: string;
  rate: number;
  deadline: string; // 2024-08-06 ISO8601 primitivos
}

/*

assessments: {
  ids: [],
  entities: {}
}

*/

const assessmentsAdapter = createEntityAdapter({
  selectId: (assessment: Assessment) => assessment.id, // quando é "id" é opcional essa config
  sortComparer: (a, b) => a.title.localeCompare(b.title), // opcional, só se usa se quiser modificar a ordenação do array
});

const assessmentsSlice = createSlice({
  name: "assessments",
  initialState: assessmentsAdapter.getInitialState({
    message: "",
    pagination: {
      limit: 10,
      page: 1,
      count: 0,
      totalPages: 0,
    },
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllAssessments.fulfilled, (currentState, action) => {
      // se o payload.ok for true a api respondeu com sucesso
      if (action.payload.ok && action.payload.data) {
        // { ids: [], entities: {} }
        const arrayFormat = action.payload.data.map((assessment) => ({
          id: assessment.id,
          title: assessment.title,
          rate: Number(assessment.rate),
          deadline: assessment.deadline.split("T")[0], // ["2024-08-13", "T00:00:00Z"]
        }));

        assessmentsAdapter.setAll(currentState, arrayFormat);

        currentState.pagination = action.payload.pagination!;
      }

      enqueueSnackbar(action.payload.message, {
        variant: action.payload.ok ? "success" : "error",
      });

      currentState.message = action.payload.message;
    });

    builder.addCase(createAssessment.fulfilled, (currentState, action) => {
      if (action.payload.ok && action.payload.data) {
        // atualiza o estado global adicionando a nova avaliação retornada pela API
        assessmentsAdapter.addOne(currentState, {
          id: action.payload.data.id,
          title: action.payload.data.title,
          rate: Number(action.payload.data.rate),
          deadline: action.payload.data.deadline.split("T")[0], // ["2024-08-13", "T00:00:00Z"]
        });
      }

      enqueueSnackbar(action.payload.message, {
        variant: action.payload.ok ? "success" : "error",
      });

      currentState.message = action.payload.message;
    });

    builder.addCase(updateAssessment.fulfilled, (currentState, action) => {
      if (action.payload.ok && action.payload.data) {
        // atualiza o estado global atualizando a avaliação correspondente
        assessmentsAdapter.updateOne(currentState, {
          id: action.payload.data.id,
          changes: {
            title: action.payload.data.title,
            rate: Number(action.payload.data.rate),
            deadline: action.payload.data.deadline.split("T")[0], // ["2024-08-13", "T00:00:00Z"]
          },
        });
      }

      enqueueSnackbar(action.payload.message, {
        variant: action.payload.ok ? "success" : "error",
      });

      currentState.message = action.payload.message;
    });

    builder.addCase(deleteAssessment.fulfilled, (currentState, action) => {
      if (action.payload.ok && action.payload.data) {
        // atualiza o estado global excluindo a avaliação correspondente
        assessmentsAdapter.removeOne(currentState, action.payload.data.id);
      }

      enqueueSnackbar(action.payload.message, {
        variant: action.payload.ok ? "success" : "error",
      });

      currentState.message = action.payload.message;
    });
  },
});

export const assessmentsReducer = assessmentsSlice.reducer;

// list - listAssessments
// get - getAssessmentById
export const { selectAll: listAssessments, selectById: getAssessmentById } =
  assessmentsAdapter.getSelectors();

// Componente => Ação Assincrona => Chama a API => API Responde => Estado de avaliações é setado
