import { Router } from 'express';
import { AssessmentsController } from '../controllers/assessments.controller';
import { AuthMiddleware } from '../middlewares/auth/auth.middleware';

export class AssessmentsRoutes {
    public static execute(): Router {
        const router = Router();

        // rota privada => PRECISA ESTAR LOGADO => PRECISA DE UM TOKEN VÁLIDO
        router.post("/", [AuthMiddleware.validate], AssessmentsController.create);

        return router;
    }
}