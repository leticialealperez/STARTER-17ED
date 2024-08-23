import { Router } from 'express';
import { AssessmentsController } from '../controllers';
import {
  AuthMiddleware,
  CreateAssessmentMiddleware,
  NotEnrolledMiddleware,
  NotGraduatedMiddleware,
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
        NotGraduatedMiddleware.validate,
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
        NotGraduatedMiddleware.validate,
        NotEnrolledMiddleware.validate,
        ValidateIdFormatMiddleware.validate,
        UpdateAssessmentMiddleware.validateFieldTypes,
        UpdateAssessmentMiddleware.validateFieldsValue,
      ],
      AssessmentsController.update,
    );
    router.delete(
      '/:id',
      [
        AuthMiddleware.validate,
        NotGraduatedMiddleware.validate,
        NotEnrolledMiddleware.validate,
        ValidateIdFormatMiddleware.validate,
      ],
      AssessmentsController.delete,
    );

    return router;
  }
}
