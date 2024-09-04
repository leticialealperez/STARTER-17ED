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
    const controller = new EnrollmentsController();

    router.post(
      '/',
      [
        AuthMiddleware.validate,
        CreateEnrollmentMiddleware.validateMissingFields,
        CreateEnrollmentMiddleware.validateFieldTypes,
        CreateEnrollmentMiddleware.validateFieldsValue,
      ],
      controller.create,
    );

    router.get(
      '/',
      [AuthMiddleware.validate, PaginationParamsMiddleware.validate],
      controller.list,
    );

    return router;
  }
}
