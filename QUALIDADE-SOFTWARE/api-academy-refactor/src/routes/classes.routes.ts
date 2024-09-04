import { Router } from 'express';
import { ClassesController } from '../controllers';
import { AuthMiddleware, PaginationParamsMiddleware } from '../middlewares';

export class ClassesRoutes {
  public static execute(): Router {
    const router = Router();
    const controller = new ClassesController();

    router.get(
      '/',
      [AuthMiddleware.validate, PaginationParamsMiddleware.validate],
      controller.list,
    );

    return router;
  }
}
