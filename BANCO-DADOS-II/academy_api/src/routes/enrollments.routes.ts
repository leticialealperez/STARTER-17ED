import { Router } from 'express';
import { EnrollmentsController } from '../controllers';
import {
  AuthMiddleware,
  CreateEnrollmentMiddleware,
  PaginationParamsMiddleware,
} from '../middlewares';

export class EnrollmentsRoutes {
  public static execute(): Router {
    const router = Router();

    router.post(
      '/',
      [
        AuthMiddleware.validate,
        CreateEnrollmentMiddleware.validateMissingFields,
        CreateEnrollmentMiddleware.validateFieldTypes,
        CreateEnrollmentMiddleware.validateFieldsValue,
      ],
      EnrollmentsController.create,
    );

    router.get(
      '/',
      [AuthMiddleware.validate, PaginationParamsMiddleware.validate],
      EnrollmentsController.list,
    );

    return router;
  }
}
