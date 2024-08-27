import { Router } from 'express';
import { StudentsController } from '../controllers';
import {
  CreateStudentMiddleware,
  PaginationParamsMiddleware,
  UpdateStudentMiddleware,
  ValidateIdFormatMiddleware,
} from '../middlewares';

export class StudentsRoutes {
  public static execute(): Router {
    const router = Router();

    router.post(
      '/',
      [
        CreateStudentMiddleware.validateMissingFields,
        CreateStudentMiddleware.validateFieldTypes,
        CreateStudentMiddleware.validateFieldsValue,
      ],
      StudentsController.create,
    );
    router.get(
      '/',
      [PaginationParamsMiddleware.validate],
      StudentsController.list,
    );
    router.get(
      '/:id',
      [ValidateIdFormatMiddleware.validate],
      StudentsController.get,
    );
    router.delete(
      '/:id',
      [ValidateIdFormatMiddleware.validate],
      StudentsController.delete,
    );

    router.put(
      '/:id',
      [
        ValidateIdFormatMiddleware.validate,
        UpdateStudentMiddleware.validateFieldTypes,
        UpdateStudentMiddleware.validateFieldsValue,
      ],
      StudentsController.update,
    );

    return router;
  }
}
