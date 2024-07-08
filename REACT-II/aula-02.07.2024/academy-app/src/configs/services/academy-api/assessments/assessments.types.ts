export interface ListAllRequestParams {
    token: string;
    limit?: number;
    page?: number;
}

export interface Assessment {
    id: string;
    title: string;
    rate: string;
    deadline: string;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    studentId: string;
}

export interface CreateAssessmentRequestBody {
    token: string;
    title: string;
    rate: number;
    deadline: string;
}

export interface UpdateAssessmentRequestBody {
    token: string;
    assessmentId: string;
    title?: string;
    rate?: number;
    deadline?: string;
}

export interface DeleteAssessmentRequestParams {
    token: string;
    assessmentId: string;
}


