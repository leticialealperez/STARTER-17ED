import { Router } from 'express';
import { ClassesController } from '../controllers';
import { AuthMiddleware, PaginationParamsMiddleware } from '../middlewares';

export class ClassesRoutes {
  public static execute(): Router {
    const router = Router();

    router.get(
      '/',
      [AuthMiddleware.validate, PaginationParamsMiddleware.validate],
      ClassesController.list,
    );

    return router;
  }
}
