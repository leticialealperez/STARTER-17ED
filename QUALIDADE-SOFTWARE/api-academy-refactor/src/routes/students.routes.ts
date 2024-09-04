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
    const controller = new StudentsController();

    router.post(
      '/',
      [
        CreateStudentMiddleware.validateMissingFields,
        CreateStudentMiddleware.validateFieldTypes,
        CreateStudentMiddleware.validateFieldsValue,
      ],
      controller.create,
    );
    router.get('/', [PaginationParamsMiddleware.validate], controller.list);
    router.get('/:id', [ValidateIdFormatMiddleware.validate], controller.get);
    router.delete(
      '/:id',
      [ValidateIdFormatMiddleware.validate],
      controller.delete,
    );

    router.put(
      '/:id',
      [
        ValidateIdFormatMiddleware.validate,
        UpdateStudentMiddleware.validateFieldTypes,
        UpdateStudentMiddleware.validateFieldsValue,
      ],
      controller.update,
    );

    return router;
  }
}
