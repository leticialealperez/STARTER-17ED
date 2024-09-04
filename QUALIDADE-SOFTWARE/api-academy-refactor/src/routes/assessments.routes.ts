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
    const controller = new AssessmentsController();

    router.post(
      '/',
      [
        AuthMiddleware.validate,
        NotGraduatedMiddleware.validate,
        CreateAssessmentMiddleware.validateMissingFields,
        CreateAssessmentMiddleware.validateFieldTypes,
        CreateAssessmentMiddleware.validateFieldsValue,
      ],
      controller.create,
    );
    router.get(
      '/',
      [AuthMiddleware.validate, PaginationParamsMiddleware.validate],
      controller.list,
    );
    router.get(
      '/:id',
      [AuthMiddleware.validate, ValidateIdFormatMiddleware.validate],
      controller.get,
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
      controller.update,
    );
    router.delete(
      '/:id',
      [
        AuthMiddleware.validate,
        NotGraduatedMiddleware.validate,
        NotEnrolledMiddleware.validate,
        ValidateIdFormatMiddleware.validate,
      ],
      controller.delete,
    );

    return router;
  }
}
