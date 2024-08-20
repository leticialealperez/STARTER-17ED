import { Router } from 'express';
import { AssessmentsController } from '../controllers';
import {
  AuthMiddleware,
  CreateAssessmentMiddleware,
  PaginationParamsMiddleware,
  UpdateAssessmentMiddleware,
  ValidateIdFormatMiddleware,
} from '../middlewares';

export class AssessmentsRoutes {
  public static execute(): Router {
    const router = Router();

    router.post(
      '/',
      [
        AuthMiddleware.validate,
        CreateAssessmentMiddleware.validateMissingFields,
        CreateAssessmentMiddleware.validateFieldTypes,
        CreateAssessmentMiddleware.validateFieldsValue,
      ],
      AssessmentsController.create,
    );
    router.get(
      '/',
      [AuthMiddleware.validate, PaginationParamsMiddleware.validate],
      AssessmentsController.list,
    );
    router.get(
      '/:id',
      [AuthMiddleware.validate, ValidateIdFormatMiddleware.validate],
      AssessmentsController.get,
    );
    router.put(
      '/:id',
      [
        AuthMiddleware.validate,
        ValidateIdFormatMiddleware.validate,
        UpdateAssessmentMiddleware.validateFieldTypes,
        UpdateAssessmentMiddleware.validateFieldsValue,
      ],
      AssessmentsController.update,
    );
    router.delete(
      '/:id',
      [AuthMiddleware.validate, ValidateIdFormatMiddleware.validate],
      AssessmentsController.delete,
    );

    return router;
  }
}
