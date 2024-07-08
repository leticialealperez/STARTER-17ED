import axios from 'axios';

export const academyApi = axios.create({
    baseURL: 'http://localhost:3030'
});

export interface ResponseAPI<T> {
    ok: boolean;
    message: string;
    errors?: Array<{
        field: string;
        message: string;
    }>;
    data?: T;
    pagination?: {
        limit: number;
		page: number;
		count: number;
		totalPages: number;
    } 
}