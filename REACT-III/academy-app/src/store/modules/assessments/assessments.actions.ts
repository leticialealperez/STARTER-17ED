import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  CreateAssessment,
  createAssessmentService,
  DeleteAssessment,
  deleteAssessmentService,
  getAllAssessmentService,
  RequestAPI,
  UpdateAssessment,
  updateAssessmentService,
} from "../../../configs/services/academy-api/assessments.service";

interface FetchAllAssessments {
  token: string;
  limit?: number;
  page?: number;
}

export const fetchAllAssessments = createAsyncThunk(
  "assessments/getAll",
  async (obj: FetchAllAssessments) => {
    const result = await getAllAssessmentService(obj.token, obj.limit, obj.page);

    return result;
  },
);

export const createAssessment = createAsyncThunk(
  "assessments/create",
  async (data: RequestAPI<CreateAssessment>) => {
    const result = await createAssessmentService(data);

    // o retorno é usado como payload pelo reducer
    return result;
  },
);

export const updateAssessment = createAsyncThunk(
  "assessments/update",
  async (data: RequestAPI<UpdateAssessment>) => {
    const result = await updateAssessmentService(data);

    return result;
  },
);

export const deleteAssessment = createAsyncThunk(
  "assessments/delete",
  async (data: RequestAPI<DeleteAssessment>) => {
    const result = await deleteAssessmentService(data);

    return result;
  },
);
